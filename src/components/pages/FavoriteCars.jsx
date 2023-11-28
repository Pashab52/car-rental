import { FavCarsList } from "../FavCarsList/FavCarsList";
import css from "./Cars.module.css";

const FavoriteCars = () => {

  return (
    <div className={css.carsContainer}>
      <FavCarsList />
    </div>
  );
};

export default FavoriteCars;
