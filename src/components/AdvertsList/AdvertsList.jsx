import { AdvertsItem, Loader } from 'components';
import { useSelector } from 'react-redux';
import { selectLoading } from 'redux/selectors';
import { List } from './AdvertsList.styled';

export const AdvertsList = ({ adverts }) => {
  const isLoading = useSelector(selectLoading);

  return isLoading ? (
    <Loader />
  ) : (
    <List>
      {adverts.map(item => (
        <AdvertsItem
          key={item.id}
          id={item.id}
          year={item.year}
          make={item.make}
          model={item.model}
          type={item.type}
          img={item.img}
          description={item.description}
          fuelConsumption={item.fuelConsumption}
          engineSize={item.engineSize}
          accessories={item.accessories}
          functionalities={item.functionalities}
          rentalPrice={item.rentalPrice}
          rentalCompany={item.rentalCompany}
          address={item.address}
          rentalConditions={item.rentalConditions}
          mileage={item.mileage}
        />
      ))}
    </List>
  );
};
