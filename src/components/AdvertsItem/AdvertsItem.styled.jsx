import styled from '@emotion/styled';

export const Item = styled.li`
  width: 274px;
`;

export const WrapperFoto = styled.div`
  position: relative;
  height: 268px;
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
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  margin-bottom: 8px;
  font-weight: 500;
  line-height: 150%;
`;

export const WrapperModel = styled.span`
  color: ${props => props.theme.colors.accent};
  margin-left: 4px;
`;

export const Wrap = styled.div`
  max-width: 230px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Text = styled.p`
  color: ${props => props.theme.colors.lightGrey};
  font-size: 12px;
  line-height: 150%;
  font-weight: 400;
  max-width: 274px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PressButton = styled.button`
  margin-top: 28px;
  margin-bottom: 21px;
  width: 100%;
  padding: 12px;
  border-radius: 12px;
  background-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.white};
  font-size: 14px;
  font-weight: 600;
  line-height: 142.857%;
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

export const Icon = styled.div`
  position: absolute;
  top: 14px;
  right: 14px;
  cursor: pointer;
  & svg {
    width: 18px;
    height: 18px;
    fill: ${props => (props.isAdvertsInFavorites ? '#3470FF' : 'none')};
    stroke: ${props => (props.isAdvertsInFavorites ? 'none' : '#FFFFFFCC')};
    stroke-width: ${props => (props.isAdvertsInFavorites ? '0' : '100px')};
    pointer-events: none;
  }
`;
