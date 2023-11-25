import { useState } from "react";
import { carMakers } from "./carMakers";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/carsSlice";

export function Filter() {
  const dispatch = useDispatch();
  const [makers, setMakers] = useState("");
  const [price, setPrice] = useState("");

  const priceArr = [];
  for (let i = 10; i <= 500; i += 10) {
    priceArr.push(i);
  }

  const handleSelectChange = (event) => {
    switch (event.currentTarget.name) {
      case "makers":
        setMakers(event.currentTarget.value);
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
    dispatch(setFilter([makers, price]));
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
