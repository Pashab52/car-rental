import { NavLink, Link} from 'react-router-dom';
import css from "./Header.module.css";
import carPhoto from "../../assets/img/carPhoto.png";

export const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.headerContainer}>
        <Link to="/">
          <img
            className={css.headerImg}
            src={carPhoto}
            alt="carPhoto"
            height="50px"
          />
        </Link>
        <Link to="/">
          <p className={css.headerTitle}>CAR Rental</p>
        </Link>

        <nav className={css.headerNav}>
          <NavLink className={css.headerLink} to="/">
            Home
          </NavLink>
          <NavLink className={css.headerLink} to="catalog">
            Catalog
          </NavLink>
          <NavLink
            className={css.headerLink}
            to="favorites"
          >
            Favorites
          </NavLink>
        </nav>
      </div>
    </header>
  );
};
