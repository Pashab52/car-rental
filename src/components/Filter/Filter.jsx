import { useState } from "react";
import { carMakers } from "./carMakers";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/carsSlice";
import { selectFilterCars } from "../../redux/selectors";
import { fetchCars } from "../../redux/operations";


export function Filter() {
  const dispatch = useDispatch();
  const [maker, setMaker] = useState('');
  const [price, setPrice] = useState("500");




  const priceArr = [];
  for (let i = 10; i <= 500; i += 10) {
    priceArr.push(i);
  }

  const handleSelectChange = (event) => {
    switch (event.currentTarget.name) {
      case "makers":
        setMaker(event.currentTarget.value);
        break;

      case "price":
        setPrice(event.currentTarget.value);

        break;

      default:
        console.warn("error");
    }
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(setFilter([maker, price]));
  };

  return (
    <>
      <form onSubmit={handleOnSubmit}>
        <label>
          Car brand
          <select
            id="makers"
            name="makers"
            defaultValue="start"
            onChange={handleSelectChange}
          >
            <option value="start" hidden>
              Enter the text
            </option>
            <option value=''>All cars</option>
            {carMakers.map((maker) => (
              <option key={maker} value={maker}>
                {maker}
              </option>
            ))}
          </select>
        </label>

        <label>
          Price/ 1 hour
          <select
            id="price"
            name="price"
            defaultValue="$"
            onChange={handleSelectChange}
          >
            <option value="$" hidden>
              To $
            </option>
            <option value="500">All price</option>
            {priceArr.map((price) => (
              <option key={price} value={price}>
                ${price}
              </option>
            ))}
          </select>
        </label>
        <button type="submit">Search</button>
      </form>
    </>
  );
}
