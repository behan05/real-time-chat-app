import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <header>Navbar or AppBar</header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;
