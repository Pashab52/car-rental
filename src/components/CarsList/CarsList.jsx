import { CarsItem } from "../CarsItem/CarsItem";
import css from "./CarsList.module.css";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCars,
  selectIsLoading,
  selectFilterCars,
} from "../../redux/selectors";
import { useState } from "react";
import { Loader } from "../Loader/Loader";

import { fetchCars } from "../../redux/operations";

export function CarsList() {
  const carsData = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const filterCarsData = useSelector(selectFilterCars);
  const [carsDataLength, setCarsDataLength] = useState(0);
  const [currentPage, setCurrentPage] = useState(2);
  const dispatch = useDispatch();

  function onBtnClick() {
    setCurrentPage(currentPage + 1);
    setCarsDataLength(carsData.length);
    dispatch(fetchCars(currentPage));
  }

  return (
    <>
      <ul className={css.carsList}>
        {filterCarsData.map((car) => {
          return <CarsItem key={car.id} car={car} />;
        })}
      </ul>
      <div className={css.carsLoadBtnWrap}>
        {isLoading ? (
          <Loader />
        ) : ( carsData.length !== carsDataLength &&
          <button
            className={css.carsLoadBtn}
            type="button"
            onClick={() => {
              onBtnClick();
            }}
            disabled={carsData.length === carsDataLength}
          >
            Load more
          </button>
        )}
      </div>
    </>
  );
}
