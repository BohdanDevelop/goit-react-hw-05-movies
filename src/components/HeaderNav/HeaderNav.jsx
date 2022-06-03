import { NavLink } from 'react-router-dom';
import style from './HeaderNav.module.scss';

const HeaderNav = () => {
  const getActiveLink = ({ isActive }) => {
    return isActive ? [style.active, style.navLink].join(' ') : style.navLink;
  };
  return (
    <>
      <NavLink className={getActiveLink} to="/home">
        Home
      </NavLink>
      <NavLink className={getActiveLink} to="/movies">
        Movies
      </NavLink>
    </>
  );
};

export default HeaderNav;
