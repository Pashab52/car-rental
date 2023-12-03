import { useDispatch, useSelector } from "react-redux";
import css from './Cars.module.css'
import { useEffect} from "react";
import {
  fetchCars,
} from "../../redux/operations";
import {
  selectCars,
} from "../../redux/selectors";
import { CarsList } from '../CarsList/CarsList';
import {Filter} from '../Filter/Filter'

const Cars = () => {
  const dispatch = useDispatch();
const carsData = useSelector(selectCars);

  useEffect(() => {
    if (carsData.length === 0) {
      dispatch(fetchCars(1));
    }
  
  }, [carsData.length, dispatch]);
  
  return (
    <>
      <div className={css.carsContainer}>
        <Filter />
        <CarsList />
      </div>
    </>
  );
};

export default Cars;
