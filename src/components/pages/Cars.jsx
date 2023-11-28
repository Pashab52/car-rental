import { useDispatch, useSelector } from "react-redux";
import css from './Cars.module.css'
// import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect, useState } from "react";
import {
  fetchCars,
} from "../../redux/operations";
import {
  selectCars,
  selectIsLoading,
} from "../../redux/selectors";
import { CarsList } from '../CarsList/CarsList';
import {Filter} from '../Filter/Filter'

const Cars = () => {
  // const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
//  const isLoading = useSelector(selectIsLoading);
const carsData = useSelector(selectCars);

  useEffect(() => {
    if (carsData.length === 0) {
      dispatch(fetchCars(1));
    }
  
  }, [carsData.length, dispatch]);

  // function setPage() {
  //   setCurrentPage(currentPage + 1)
  // }
  
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
