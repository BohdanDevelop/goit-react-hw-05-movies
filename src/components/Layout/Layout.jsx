import {  Outlet } from 'react-router-dom';
import HeaderNav from '../HeaderNav';
import style from './Layout.module.scss';
const Layout = () => {
  return (
    <>
      <header className={style.header}>
        <HeaderNav />
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
};

export default Layout;
