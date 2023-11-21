import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./FavCarsItem.module.css";
import carPhoto from "../img/carPhoto.png";
import { Modal } from "../Modal/Modal";
import { ModalData } from "../ModalData/ModalData";
import {
  addFavorite,
  delFavorite,
} from "../../redux/carsSlice"; 
import {selectFavCars} from '../../redux/selectors'

export function FavCarsItem({ car }) {
    const dispatch = useDispatch();
    const favCarsData = useSelector(selectFavCars);
  const [showModal, setShowModal] = useState(false);
  const handleModalClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    };

      const handleFavBtn = () => {
          if (!favCarsData.includes(car)) {
              dispatch(addFavorite(car))
              return
          }
      dispatch(delFavorite(car));
    };
    
  return (
    <>
      <li className={css.contactItem}>
        <div className="movie-search-poster-wrap">
          {car.img ? (
            <img
              className="movie-search-poster"
              src={car.img}
              onError={(event) =>
                (event.target.src = carPhoto)
              }
              alt={car.model}
              width="274px"
              height="268px"
            />
          ) : (
            <img
              className="movie-search-poster"
              src={carPhoto}
              alt={car.model}
              width="274px"
              height="268px"
            />
          )}
          <button type="button" onClick={handleFavBtn}>
            Add to Favotite
          </button>
        </div>

        <div className="movie-txt-wrap">
          <p className="movie-txt">{car.make}</p>
          <p className="movie-txt">{car.model}</p>
          <p className="movie-txt">{car.year}</p>
          <p className="movie-txt">{car.rentalPrice}</p>
        </div>
        <div>
          <p className="movie-txt">{car.adress}</p>
          <p className="movie-txt">{car.rentalCompany}</p>
          <p className="movie-txt">{car.type}</p>
          <p className="movie-txt">{car.model}</p>
          <p className="movie-txt">{car.mileage}</p>
          <p className="movie-txt">
            {car.functionalities[0]}
          </p>
        </div>

        <button
          type="button"
          onClick={() => {
            handleModalClick();
          }}
        >
          Learn more
        </button>
      </li>
      {showModal && (
        <Modal onModalClose={closeModal}>
          <ModalData onModalClose={closeModal} car={car} />
        </Modal>
      )}
    </>
  );
}
