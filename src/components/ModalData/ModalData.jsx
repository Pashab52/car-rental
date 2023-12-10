import css from "./ModalData.module.css";
import carPhoto from "../../assets/img/carPhoto2.png";
import { ReactSVG } from "react-svg";
import vector from "../../assets/img/vector.svg";
import x from "../../assets/img/x.svg";

export function ModalData({ car, onModalClose }) {
  const addressToShow = car.address.split(", ").slice(1, 3);

  const renCondAge = car.rentalConditions
    .split("\n")
    .slice(0, 1);
  const renCondAgeArr = renCondAge[0].split(":");

  const rentalConditions = car.rentalConditions
    .split("\n")
    .slice(1);

  const mileage = (car.mileage / 1000)
    .toString()
    .replace(".", ",");
  const price = car.rentalPrice.slice(1) + car.rentalPrice[0];
  
  return (
    <div className={css.modalWrrapper}>
      <ReactSVG
        className={css.modalCloseBtn}
        src={x}
        onClick={onModalClose}
      />
      <div className={css.modalImgWrap}>
        {car.img ? (
          <img
            className={css.modalImg}
            alt={`${car.make} ${car.model}`}
            src={car.img}
            onError={(event) =>
              (event.target.src = carPhoto)
            }
            width="469px"
            height="314px"
          />
        ) : (
          <img
            className={css.modalImg}
            alt={`${car.make} ${car.model}`}
            src={carPhoto}
            width="469px"
            height="314px"
          />
        )}
      </div>
      <ul className={css.carTitleWrap}>
        <li className={css.carTxt}>{car.make}</li>
        <li className={css.carTxt}>{car.model},</li>
        <li className={css.carTxt}>{car.year}</li>
      </ul>

      <ul className={css.carDesWrap}>
        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            {addressToShow[0]}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>

        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            {addressToShow[1]}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>

        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            <span>Id: </span>
            {car.id}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>
        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            <span>Year: </span>
            {car.year}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>
        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            <span>Type: </span>
            {car.type}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>

        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            <span>Fuel Consumption: </span>
            {car.fuelConsumption}
          </p>
          <ReactSVG
            className={css.carDesSvg}
            src={vector}
          />
        </li>
        <li className={css.carDesItem}>
          <p className={css.carDesTxt}>
            <span>Engine Size: </span> {car.engineSize}
          </p>
        </li>
      </ul>

      <p className={css.carDescription}>
        {car.description}
      </p>

      <p className={css.carModalTitles}>
        Accessories and functionalities:
      </p>

      <ul className={css.carDesWrap}>
        {car.accessories.map((item, index) => (
          <li className={css.carDesItem} key={index}>
            <p className={css.carDesTxt}>{item}</p>
            <ReactSVG
              className={css.carDesSvg}
              src={vector}
            />
          </li>
        ))}
        {car.functionalities.map((item, index) => (
          <li className={css.carDesItem} key={index}>
            <p className={css.carDesTxt}>{item}</p>
            <ReactSVG
              className={css.carDesSvg}
              src={vector}
            />
          </li>
        ))}
      </ul>
      <p className={css.carModalTitles}>
        Rental Conditions:
      </p>

      <ul className={css.carDesItem}>
        <li className={css.rentalConditions}>
          {renCondAgeArr[0]}:
          <span className={css.ageColor}>
            {renCondAgeArr[1]}
          </span>
        </li>
        {rentalConditions.map((item, index) => (
          <li className={css.rentalConditions} key={index}>
            {item}
          </li>
        ))}
        <li className={css.rentalConditions}>
          Mileage:{" "}
          <span className={css.ageColor}>{mileage}</span>
        </li>
        <li className={css.rentalConditions}>
          Price:{" "}
          <span className={css.ageColor}>{price}</span>
        </li>
      </ul>
      <a
        href="tel:+380730000000"
        className={css.carsItemBtn}
      >
        Rental car
      </a>
         </div>
  );
}
