import { useEffect } from 'react';
import {
  Overlay,
  Wrapper,
  IconClose,
  ButtonClose,
  WrapperFoto,
  ImageCar,
  Wrap,
  WrapperModel,
  Text,
  Description,
  Subtitle,
  WrapperFlex,
  Envelope,
  SpanBlue,
  LinkTel,
} from './PopUp.styled';

export const PopUp = ({
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
  onClose,
}) => {
  useEffect(() => {
    const handleClick = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleClick);
    return () => {
      window.removeEventListener('keydown', handleClick);
    };
  }, [onClose]);

  const onOverlayClickClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <Overlay onClick={onOverlayClickClose}>
      <Wrapper>
        <ButtonClose onClick={onClose}>
          <IconClose />
        </ButtonClose>
        <WrapperFoto>
          <ImageCar src={img} alt="Car" />
        </WrapperFoto>
        <Wrap>
          {make}
          <WrapperModel>{model}, </WrapperModel>
          {year}
        </Wrap>
        <Text>
          {address} id: {id} | Year: {year} | Type: {type}
        </Text>
        <Text>
          Fuel Consumption: {fuelConsumption} | Engine Size: {engineSize}
        </Text>
        <Description>{description}</Description>
        <Subtitle>Accessories and functionalities:</Subtitle>
        <Text>
          {accessories[0]} | {accessories[1]} | {accessories[2]}
        </Text>
        <Text>
          {functionalities[0]} | {functionalities[1]} | {functionalities[2]}
        </Text>
        <Subtitle>Rental Conditions:</Subtitle>
        <WrapperFlex>
          <Envelope>
            Minimum age : <SpanBlue>25</SpanBlue>
          </Envelope>
          <Envelope>Valid driver’s license</Envelope>
        </WrapperFlex>
        <WrapperFlex>
          <Envelope>Security deposite required</Envelope>
          <Envelope>
            Mileage: <SpanBlue>{mileage.toLocaleString('en-US')}</SpanBlue>
          </Envelope>
          <Envelope>
            Price: <SpanBlue>{rentalPrice}</SpanBlue>
          </Envelope>
        </WrapperFlex>
        <LinkTel href="tel:+380730000000">Rental car</LinkTel>
      </Wrapper>
    </Overlay>
  );
};
