
import { FavCarsItem } from "../FavCarsItem/FavCarsItem";
import css from "./FavCarsList.module.css";
import { useSelector } from "react-redux";
import {
  selectFavCars,
  selectIsLoading,
} from "../../redux/selectors";
import { Loader } from "../Loader/Loader";

export function FavCarsList() {
  const favCarsData = useSelector(selectFavCars);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {favCarsData.length > 0 ?
      (isLoading ? (
        <Loader />
      ) : (
        <ul className={css.carsList}>
          {favCarsData.map((car) => {
            return <FavCarsItem key={car.id} car={car} />;
          })}
        </ul>
      )) : <p>No car in favorite</p>}
    </>
  );
}
