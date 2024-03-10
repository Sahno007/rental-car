import { AdvertsList, Container, Section } from 'components';
import { useSelector } from 'react-redux';
import { selectFavorites } from 'redux/selectors';
import { Empty } from './Favorites.styled';

export default function Favorites() {
  const favorites = useSelector(selectFavorites);

  return (
    <Container>
      <Section>
        {favorites.length === 0 ? (
          <Empty>Your favorites is empty.</Empty>
        ) : (
          <AdvertsList adverts={favorites} />
        )}
      </Section>
    </Container>
  );
}
