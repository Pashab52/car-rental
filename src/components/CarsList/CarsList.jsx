
import { CarsItem } from "../CarsItem/CarsItem";
import css from "./CarsList.module.css";
import { useSelector } from "react-redux";
import {
  selectCars,
  selectIsLoading,
} from "../../redux/selectors";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

export function CarsList({ setPage }) {
  const carsData = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const [carsDataLength, setCarsDataLength] = useState(0);

  function onBtnClick() {
    setPage();
    setCarsDataLength(carsData.length);
  }

  return (
    <>
      <ul className={css.carsList}>
        {carsData.map((car) => {
          
          return (
            <CarsItem
              key={car.id}
              car={car}
            
            />
          );
        })}
      </ul>
      {isLoading ? (
        <Loader />
      ) : (
        <button
          type="button"
          onClick={() => {
            onBtnClick();
          }}
          disabled={carsDataLength === carsData.length}
        >
          Load more
        </button>
      )}
    </>
  );
}
