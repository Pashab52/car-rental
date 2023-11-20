import { useDispatch, useSelector } from "react-redux";

// import { selectError, selectIsLoading } from "../../redux/selectors";
import { useEffect, useState } from "react";
import { fetchCars } from "../../redux/operations";
import { CarsList } from '../CarsList/CarsList';

const Cars = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();
//  const isLoading = useSelector(selectIsLoading);


  useEffect(() => {
    dispatch(fetchCars(currentPage));
  }, [currentPage, dispatch]);

  function setPage() {
  setCurrentPage(currentPage+1)
  }
  
   

  return (
    <>
      <div className="homeWrap">
        <CarsList
          setPage={setPage}
        />
      </div>
      
    </>
  );
};

export default Cars;
