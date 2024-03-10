import { createSelector } from '@reduxjs/toolkit';

export const selectAdverts = state => state.adverts.adverts;
export const selectLoading = state => state.adverts.isLoading;
export const selectError = state => state.adverts.error;
export const selectFavorites = state => state.favorites.favorites;
export const selectFilterMake = state => state.filter.filterMake;
export const selectFilterPrice = state => state.filter.filterPrice;
export const selectFilterFrom = state => state.filter.filterMileage.from;
export const selectFilterTo = state => state.filter.filterMileage.to;
export const selectIsFiltred = state => state.filter.isFiltred;

export const filtredAdverts = createSelector(
  [selectAdverts, selectFilterMake, selectFilterPrice, selectFilterFrom, selectFilterTo],
  (adverts, make, price, from, to) => {
    const formattedPrice = `$${price}`;
    const filterByMake = adverts.filter(advert => make === '' || advert.make === make);
    const filterByPrice = adverts.filter(
      advert => price === '' || advert.rentalPrice === formattedPrice
    );
    const filterByMileage = adverts.filter(advert => {
      if (from !== '' && to !== '') {
        const mileage = parseInt(advert.mileage, 10);
        return mileage >= parseInt(from, 10) && mileage <= parseInt(to, 10);
      } else if (from !== '' && to === '') {
        const mileage = parseInt(advert.mileage, 10);
        return mileage >= parseInt(from, 10);
      } else if (from === '' && to !== '') {
        const mileage = parseInt(advert.mileage, 10);
        return mileage <= parseInt(to, 10);
      }
      return true;
    });

    let filter;

    if (make !== '' && price !== '' && from !== '' && to !== '') {
      filter = filterByMake.filter(
        advert => filterByPrice.includes(advert) && filterByMileage.includes(advert)
      );
    } else if (make !== '' && price !== '' && from !== '' && to === '') {
      filter = filterByMake.filter(
        advert => filterByPrice.includes(advert) && filterByMileage.includes(advert)
      );
    } else if (make !== '' && price !== '' && from === '' && to !== '') {
      filter = filterByMake.filter(
        advert => filterByPrice.includes(advert) && filterByMileage.includes(advert)
      );
    } else if (make !== '' && price !== '' && from === '' && to === '') {
      filter = filterByMake.filter(advert => filterByPrice.includes(advert));
    } else if (make !== '' && price === '' && from !== '' && to !== '') {
      filter = filterByMake.filter(advert => filterByMileage.includes(advert));
    } else if (make !== '' && price === '' && from === '' && to !== '') {
      filter = filterByMake.filter(advert => filterByMileage.includes(advert));
    } else if (make !== '' && price === '' && from !== '' && to === '') {
      filter = filterByMake.filter(advert => filterByMileage.includes(advert));
    } else if (make === '' && price !== '' && from !== '' && to !== '') {
      filter = filterByPrice.filter(advert => filterByMileage.includes(advert));
    } else if (make === '' && price !== '' && from === '' && to !== '') {
      filter = filterByPrice.filter(advert => filterByMileage.includes(advert));
    } else if (make === '' && price !== '' && from !== '' && to === '') {
      filter = filterByPrice.filter(advert => filterByMileage.includes(advert));
    } else if (make !== '' && price === '' && from === '' && to === '') {
      filter = filterByMake;
    } else if (make === '' && price !== '' && from === '' && to === '') {
      filter = filterByPrice;
    } else if (make === '' && price === '' && from !== '' && to !== '') {
      filter = filterByMileage;
    } else if (make === '' && price === '' && from === '' && to !== '') {
      filter = filterByMileage;
    } else if (make === '' && price === '' && from !== '' && to === '') {
      filter = filterByMileage;
    }

    return filter;
  }
);
