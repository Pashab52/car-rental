import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReactSVG } from "react-svg";
import css from "./CarsItem.module.css";
import carPhoto from "../../assets/img/carPhoto2.png";
import active from '../../assets/img/active.svg'
import normal from "../../assets/img/normal.svg";
import vector from "../../assets/img/vector.svg";
import { Modal } from "../Modal/Modal";
import { ModalData } from "../ModalData/ModalData";
import {
  addFavorite,
  delFavorite,
} from "../../redux/carsSlice";
import { selectFavCars } from "../../redux/selectors";

export function CarsItem({ car }) {
  const dispatch = useDispatch();
  const favCarsData = useSelector(selectFavCars);
  const [showModal, setShowModal] = useState(false);
  const handleModalClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

    const isFavorite = favCarsData.find((favCar) => favCar.id === car.id);

  const addressToShow = car.address.split(", ").slice(1,3);

  const handleFavBtn = () => {
    if (!isFavorite) {
      dispatch(addFavorite(car));
      return;
    }
      
    const favCarIdx = favCarsData.findIndex(
  (favorite) => favorite.id === car.id
    );
    dispatch(delFavorite(favCarIdx));
  };

  return (
    <>
      <li className={css.carsItem}>
        <div className={css.carsImgWrap}>
          {car.img ? (
            <img
              className={css.carsImg}
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
              src={carPhoto}
              alt={car.model}
              width="274px"
              height="268px"
            />
          )}
          <ReactSVG
            className={css.carsSvg}
            src={isFavorite ? active : normal}
            onClick={handleFavBtn}
          />
        </div>

        <div className={css.carTitleWrap}>
          <p className={css.carTxt}>{car.make}</p>
          <p className={css.carTxt}>{car.model},</p>
          <p className={css.carTxt}>{car.year}</p>
          <p className={css.carTxt}>{car.rentalPrice}</p>
        </div>
        <div className={css.carDesWrap}>
          <p className={css.carDesTxt}>
            {addressToShow[0]}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>
            {addressToShow[1]}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>
            {car.rentalCompany}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>{car.type}</p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>{car.model}</p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>{car.mileage}</p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
          <p className={css.carDesTxt}>
            {car.functionalities[0]}
          </p>
        </div>

        <button
          className={css.carsItemBtn}
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
