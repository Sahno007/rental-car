import styled from '@emotion/styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  @media (min-width: 1440px) {
    align-items: center;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  max-width: 541px;
  padding: 40px;
  background-color: ${props => props.theme.colors.white};
  border-radius: 12px;
  @media (max-width: 1439px) {
    overflow: auto;
    margin-top: 36px;
  }
  @media (min-width: 1440px) {
    height: 752px;
  }
`;

export const IconClose = styled(AiOutlineClose)`
  width: 20px;
  height: 20px;
  @media (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ButtonClose = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
`;

export const WrapperFoto = styled.div`
  position: relative;
  height: 248px;
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  overflow: hidden;
`;

export const ImageCar = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const WrapperFlex = styled.div`
  display: flex;
  gap: 8px;
`;

export const WrapperModel = styled.span`
  color: ${props => props.theme.colors.accent};
  margin-left: 4px;
`;

export const Wrap = styled.div`
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 150%;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
`;

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  line-height: 142.857%;
`;

export const Subtitle = styled.p`
  margin-top: 24px;
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 142.857%;
`;
export const Envelope = styled.div`
  margin-bottom: 8px;
  border-radius: 35px;
  background: #f9f9f9;
  padding: 7px 14px;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
  line-height: 150%;
  letter-spacing: -0.24px;
`;

export const SpanBlue = styled.span`
  color: ${props => props.theme.colors.accent};
  font-weight: 600;
`;

export const LinkTel = styled.a`
  margin-top: 16px;
  display: inline-flex;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
  cursor: pointer;
  box-shadow: ${props => props.theme.shadows.small};
  transition-property: transform, box-shadow, background-color;
  transition-duration: 0.25s;
  transition-timing-function: ${props => props.theme.animation.cubicBezier};
  &:hover {
    transform: scale(1.02);
    box-shadow: ${props => props.theme.shadows.medium};
    background-color: #0b44cd;
  }
`;
