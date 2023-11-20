
import { CarsItem } from "../CarsItem/CarsItem";
import css from "./CarsList.module.css";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/selectors";

export function CarsList() {
  const carsData = useSelector(selectCars);

  return (
    <ul className={css.carsList}>
      {carsData.map((car) => {
        return (
          <CarsItem
            key={car.id}
            id={car.id}
            year={car.year}
            make={car.make}
            img={car.img}
            model={car.model}
            type={car.type}
            adress={car.adress}
            rentalPrice={car.rentalPrice}
            mileage={car.mileage}
            rentalCompany={car.rentalCompany}
            functionalities={car.functionalities}

            //   "description": "The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.",
            //   "fuelConsumption": "10.5",
            //   "engineSize": "3.6L V6",
            //   "accessories": [
            //    "Leather seats",
            //    "Panoramic sunroof",
            //    "Premium audio system"

            //   "rentalConditions": "Minimum age: 25\nValid driver's license\nSecurity deposit required",
          />
        );
      })}
    </ul>
  );
}
