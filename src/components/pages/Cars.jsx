import { useDispatch, useSelector } from "react-redux";

import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect } from "react";
import { fetchCars } from "../../redux/operations";
import {CarsList} from '../CarsList/CarsList'

const Cars = () => {
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="homeWrap">
      <h1>Cars</h1>
      <CarsList/>
    </div>
  );
};

export default Cars;
