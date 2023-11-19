import { NavLink} from 'react-router-dom';
import css from "./Header.module.css";

export const Header = () => {
  return (
    <div className={css.header}>
      <nav className={css.headerNav}>
        <NavLink className={css.headerLink} to="/">
          Home
        </NavLink>
        <NavLink className={css.headerLink} to="catalog">
          Catalog
        </NavLink>
        <NavLink className={css.headerLink} to="favorites">
          Favorites
        </NavLink>
      </nav>
    </div>
  );
};
