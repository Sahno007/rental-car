import { useNavigate } from 'react-router-dom';
import { FaUserTie } from 'react-icons/fa';
import { FaCheckCircle } from 'react-icons/fa';
import { FaCar } from 'react-icons/fa';
import {
  ButtonGo,
  SubTitle,
  Text,
  Title,
  Wrapper,
  WrapperFlex,
  WrapperWelcom,
} from './Welcome.styled';
import { Container } from 'components';

export default function Welcome() {
  const navigate = useNavigate();

  const handleGo = () => {
    navigate('/catalog');
  };

  return (
    <>
      <WrapperWelcom>
        <Title>Rent a Car, Make Your New Story!</Title>
        <ButtonGo onClick={handleGo}>Go</ButtonGo>
      </WrapperWelcom>
      <Container>
        <WrapperFlex>
          <Wrapper>
            <FaUserTie />
            <SubTitle>Full Discretion</SubTitle>
            <Text>
              From the beginning to the end, we’ll work our hardest to meet your
              highest expectations
            </Text>
          </Wrapper>
          <Wrapper>
            <FaCheckCircle />
            <SubTitle>Quality Guaranteed</SubTitle>
            <Text>
              Upgrade your travel experience with us. We have been doing this
              for over 10 years
            </Text>
          </Wrapper>
          <Wrapper>
            <FaCar />
            <SubTitle>Luxury Fleet</SubTitle>
            <Text>
              Choose between a range of modern luxury sedans, SUVs, vans,
              coaches and limousines
            </Text>
          </Wrapper>
        </WrapperFlex>
      </Container>
    </>
  );
}
