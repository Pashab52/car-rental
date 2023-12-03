import { useState } from "react";
import { carMakers } from "./carMakers";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/carsSlice";

import Select from "react-select";

import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const [maker, setMaker] = useState('');
  const [price, setPrice] = useState("500");
  const [isSearchable, setIsSearchable] = useState(true);
 const [isClearable, setIsClearable] = useState(true);
  const priceArr = [];
  for (let i = 10; i <= 500; i += 10) {
    priceArr.push(i);
  }

const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    border: "none",
    backgroundColor: "#F7F7FB",
    width: "224px",
    borderRadius: "14px",
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    padding: "12px 18px",
  }),
  valueContainer: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
  input: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    margin: "0",
  }),

  clearIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
  }),
  dropdownIndicator: (baseStyles) => ({
    ...baseStyles,
    padding: "0",
    marginLeft: "5px",
  }),
  placeholder: (baseStyles) => ({
    ...baseStyles,
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
  }),
  menu: (baseStyles) => ({
    ...baseStyles,
    color: "#121417",
    fontSize: "18px",
    fontWeight: 500,
    width: "224px",
    borderRadius: "14px",
  }),
};

  const makers = carMakers.map((maker) => (
    { value:  maker , label:  maker  }))
  
  const prices = priceArr.map((price) => ({
    value: price,
    label: `${price}$`,
  }));

  const handleOnSubmit = (event) => {
    
    event.preventDefault();
    dispatch(setFilter([maker, price]));
  };


  return (
    <>
      <form
        className={css.filterForm}
        onSubmit={handleOnSubmit}
      >
        {/* <label>
          Car brand
          <select
            className={css.filterSelect}
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
        </label> */}

        <p>Car brand</p>
        {/* <div className={css.filterSelect}> */}
        <Select
          styles={styles}
          name="makers"
          placeholder="Enter the text"
          isSearchable={isSearchable}
          isClearable={isClearable}
          options={makers}
          onChange={(event) =>
            event ? setMaker(event.value) : setMaker("")
          }
        />
        {/* </div> */}

        <p>Car brand</p>
        <Select
          styles={{...styles, control: (baseStyles, state) => ({
              ...baseStyles,
              border: "none",
              backgroundColor: "#F7F7FB",
              width: "130px",
              borderRadius: "14px",
              color: "#121417",
              fontSize: "18px",
              fontWeight: 500,
              padding: "6px 10px 6px 18px",
            })}}
          name="price"
          placeholder="To $"
          isSearchable={false}
          isClearable={isClearable}
          options={prices}
          onChange={(event) =>
            event ? setPrice(event.value) : setPrice("500")
          }
        />

        <button type="submit">Search</button>
      </form>
    </>
  );
}
