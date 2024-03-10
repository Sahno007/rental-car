import { useState } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import {
  ImageCar,
  Item,
  PressButton,
  Text,
  Wrap,
  WrapperFlex,
  WrapperFoto,
  WrapperModel,
  Icon,
} from './AdvertsItem.styled';
import { PopUp } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectFavorites } from 'redux/selectors';
import { addToFavorites, removeFromFavorites } from 'redux/favoritesSlice';

export const AdvertsItem = ({
  id,
  year,
  make,
  model,
  type,
  img,
  description,
  fuelConsumption,
  engineSize,
  accessories,
  functionalities,
  rentalPrice,
  rentalCompany,
  address,
  rentalConditions,
  mileage,
}) => {
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const adverts = useSelector(selectAdverts);
  const favorites = useSelector(selectFavorites);

  const isAdvertsInFavorites = favorites.find(advert => advert.id === id);

  const handleFavorite = () => {
    if (!isAdvertsInFavorites) {
      const advert = adverts.find(advert => advert.id === id);
      dispatch(addToFavorites(advert));
    } else {
      dispatch(removeFromFavorites(id));
    }
    setIsFavorite(!isFavorite);
  };

  const parts = address.split(',');
  const city = parts[parts.length - 2].trim();
  const country = parts[parts.length - 1].trim();
  const formattedAddress = `${city} | ${country} |`;

  const onOpenModal = () => {
    document.body.style.overflow = 'hidden';
    setShowModal(true);
  };

  const onCloseModal = () => {
    document.body.style.overflow = 'auto';
    setShowModal(false);
  };

  return (
    <>
      <Item key={id}>
        <WrapperFoto>
          <ImageCar src={img} alt={make} loading="lazy" />
          <Icon isAdvertsInFavorites={isAdvertsInFavorites} onClick={handleFavorite}>
            <AiFillHeart />
          </Icon>
        </WrapperFoto>
        <WrapperFlex>
          <Wrap>
            {make}
            <WrapperModel>{model}, </WrapperModel>
            {year}
          </Wrap>
          <div>{rentalPrice}</div>
        </WrapperFlex>

        <Text>
          {formattedAddress} {rentalCompany}
        </Text>
        <Text>
          {type} | {model} | {id} | {accessories[0]}
        </Text>
        <PressButton type="button" onClick={onOpenModal}>
          Learn more
        </PressButton>
      </Item>
      {showModal && (
        <PopUp
          id={id}
          year={year}
          make={make}
          model={model}
          type={type}
          img={img}
          description={description}
          fuelConsumption={fuelConsumption}
          engineSize={engineSize}
          accessories={accessories}
          functionalities={functionalities}
          rentalPrice={rentalPrice}
          rentalCompany={rentalCompany}
          address={formattedAddress}
          rentalConditions={rentalConditions}
          mileage={mileage}
          onClose={onCloseModal}
        />
      )}
    </>
  );
};
