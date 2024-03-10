import { LinkNav, NavUser } from './UserNav.styled';

export const UserNav = () => {
  return (
    <NavUser>
      <LinkNav to="/catalog">Catalog</LinkNav>
      <LinkNav to="/favorites">Favorites</LinkNav>
    </NavUser>
  );
};
