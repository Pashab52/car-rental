import css from "./CarsItem.module.css";
import { useDispatch } from "react-redux";
import carPhoto from "../img/carPhoto.png";

export function CarsItem({
  id,
  year,
  make,
  img,
  model,
  type,
  adress,
  rentalPrice,
  mileage,
  rentalCompany,
  functionalities,
}) {
  const dispatch = useDispatch();

  return (
    <li className={css.contactItem}>
      <div className="movie-search-poster-wrap">
        {img ? (
          <img
            className="movie-search-poster"
            src={img}
            alt={model}
            width="274px"
            height="268px"
          />
        ) : (
          <img
            className="movie-search-poster"
            src={carPhoto}
            alt={model}
            width="320px"
            height="180px"
          />
        )}
        <button
          type="button"
          //   data-id={props.id}
          onClick={() => {}}
        >
          X
        </button>
      </div>

      <div className="movie-txt-wrap">
        <p className="movie-txt">{make}</p>
        <p className="movie-txt">{model}</p>
        <p className="movie-txt">{year}</p>
              <p className="movie-txt">{rentalPrice}</p>
           </div>  
          <div>
        <p className="movie-txt">{adress}</p>
        <p className="movie-txt">{rentalCompany}</p>
        <p className="movie-txt">{type}</p>
        <p className="movie-txt">{model}</p>
        <p className="movie-txt">{mileage}</p>
        <p className="movie-txt">{functionalities[0]}</p>
      </div>

      <button type="button" data-id={id} onClick={() => {}}>
        X
      </button>
    </li>
  );
}
