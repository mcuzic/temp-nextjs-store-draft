import { Suspense } from 'react';
import Container from '../global/Container';
import CartBuutton from './CartBuutton';
import DarkMode from './DarkMode';
import LinksDropdown from './LinksDropdown';
import Logo from './Logo';
import NavSearch from './NavSearch';

const Navbar = () => {
  return (
    <div className="border-b">
      <Container className="flex flex-col sm:flex-row sm:justify-between sm:items-center flex-wrap py-8">
        <Logo />
        <Suspense>
          <NavSearch />
        </Suspense>
        <div className="flex gap-4 items-center">
          <CartBuutton />
          <DarkMode />
          <LinksDropdown />
        </div>
      </Container>
    </div>
  );
};
export default Navbar;
