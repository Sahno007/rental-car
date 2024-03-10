import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filtredAdverts, selectAdverts, selectIsFiltred, selectLoading } from 'redux/selectors';
import { fetchAdverts } from 'redux/operations';
import { AdvertsList, Container, Filter, Section } from 'components';
import { ButtonLoadMore } from './Catalog.styled';
import { Empty } from 'pages/Favorites/Favorites.styled';

export default function Catalog() {
  const dispatch = useDispatch();
  const adverts = useSelector(selectAdverts);
  const loading = useSelector(selectLoading);
  const isFiltred = useSelector(selectIsFiltred);
  const filter = useSelector(filtredAdverts);
  const [page, setPage] = useState(() => {
    const savedPage = localStorage.getItem('page');
    return savedPage ? parseInt(savedPage, 10) : 1;
  });
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchAdverts());
  }, [dispatch]);

  const visibleAdverts = adverts.slice(0, page * itemsPerPage);

  useEffect(() => {
    localStorage.setItem('page', page.toString());
  }, [page]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  return (
    <Container>
      <Section>
        <Filter />
        <AdvertsList adverts={isFiltred ? filter : visibleAdverts} />
        {isFiltred && filter?.length === 0 && (
          <Empty>
            Sorry, no results were found for the filters you selected. You may want to consider
            other search options to find the you want.
          </Empty>
        )}
        {visibleAdverts.length < adverts.length && !loading && !isFiltred && (
          <ButtonLoadMore onClick={handleLoadMore}>Load more</ButtonLoadMore>
        )}
      </Section>
    </Container>
  );
}
