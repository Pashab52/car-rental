import css from "./ModalData.module.css";
import carPhoto from "../../assets/img/carPhoto2.png";
import { ReactSVG } from "react-svg";
import vector from "../../assets/img/vector.svg";
import x from "../../assets/img/x.svg";

export function ModalData({ car, onModalClose }) {
  const addressToShow = car.address.split(", ").slice(1, 3);

  const rentalConditions = car.rentalConditions.split('\n').slice(0, 1);
  console.log(rentalConditions)

  const renCondAge = rentalConditions;



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
        {car.accessories.map((item, index) => 
          
          <li className={css.carDesItem} key={index}>
            <p className={css.carDesTxt}>{item}</p>
            <ReactSVG
              className={css.carDesSvg}
              src={vector}
            />
          </li>
        )}
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
        {rentalConditions.map((item, index) => (
          <li className={css.rentalConditions} key={index}>
            {item}
          </li>
        ))}
        <li className={css.rentalConditions}></li>
        <li className={css.rentalConditions}></li>
      </ul>
    </div>
  );
}


// export function ModalData({ car }) {
//   const {
//     year,
//     make,
//     model,
//     img,
//     rentalPrice,
//     address,
//     description,
//     accessories,
//     functionalities,
//     rentalConditions,
//     mileage,
//   } = car;

//   const getFuelEngineData = (car) => {
//     const { fuelConsumption, engineSize } = car;
//     return [
//       `Fuel Consumption: ${fuelConsumption}`,
//       `Engine Size: ${engineSize}`,
//     ];
//   };
//   const carData = getFuelEngineData(car);

//   const getFullCarData = (address, car) => {
//     const arr = address.split(", ");
//     const city = arr[1];
//     const country = arr[arr.length - 1];
//     const { year, type, id } = car;
//     return [
//       city,
//       country,
//       `Id: ${id}`,
//       `Year: ${year}`,
//       `Type: ${type}`,
//     ];
//   };
//   const locationData = getFullCarData(address, car);

//   const parseRentalConditions = (str) => {
//     const arr = str.split("\n");
//     const num = arr[0].split(" ").slice(-1).join("");

//     arr[0] = arr[0].replace(num, "");
//     arr.splice(1, 0, num);

//     return arr;
//   };
//   const rentConditions = parseRentalConditions(
//     rentalConditions
//   );

//   const parseMileage = (num) => num.toLocaleString("en-EN");
//   const mile = parseMileage(mileage);

//   const parsePrice = (str) =>
//     str.split("").slice(1).join("");
//   const price = parsePrice(rentalPrice);

//   return (
//     <div className={css.containerCard}>
//       {/* <img
//         className={css.image}
//         src={img ? img : DefaultImage}
//         alt={`${make} ${model}`}
//         width="461"
//         height="248"
//         loading="lazy"
//       /> */}
//       {img ? (
//         <img
//           className={css.image}
//           alt={`${make} ${model}`}
//           src={img}
//           onError={(event) => (event.target.src = carPhoto)}
//           width="469px"
//           height="314px"
//         />
//       ) : (
//         <img
//           className={css.image}
//           alt={`${make} ${model}`}
//           src={carPhoto}
//           width="469px"
//           height="314px"
//         />
//       )}

//       <h2 className={css.titleCard}>
//         {make}{" "}
//         <span className={css.titleAccent}>{model}</span>,{" "}
//         {year}
//       </h2>
//       <div>
//         <ul className={css.listLocation}>
//           {locationData.map((item, idx) => (
//             <li key={idx} className={css.itemLocation}>
//               {item}
//               {idx < locationData.length - 1}
//             </li>
//           ))}
//         </ul>
//         <ul className={css.listLocation}>
//           {carData.map((item, idx) => (
//             <li key={idx} className={css.itemLocation}>
//               {item}
//               {idx < locationData.length - 1}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={css.containerDescription}>
//         {description}
//       </div>
//       <div className={css.containerFunc}>
//         <h3 className={css.titleFunc}>
//           Accessories and functionalities:
//         </h3>
//         <ul className={css.listAcces}>
//           {accessories.map((item, idx) => (
//             <li key={idx} className={css.itemAcces}>
//               {item}
//               {idx < accessories.length - 1}
//             </li>
//           ))}
//         </ul>
//         <ul className={css.listAcces}>
//           {functionalities.map((item, idx) => (
//             <li key={idx} className={css.itemAcces}>
//               {item}
//               {idx < accessories.length - 1}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className={css.containerFunc}>
//         <h3 className={css.titleFunc}>
//           Rental Conditions:
//         </h3>
//         <ul className={css.listRental}>
//           <li className={css.itemRental}>
//             <p>{rentConditions[0]}</p>
//             <span className={css.itemAccent}>
//               {rentConditions[1]}
//             </span>
//           </li>
//           <li className={css.itemRental}>
//             <p>{rentConditions[2]}</p>
//           </li>
//           <li className={css.itemRental}>
//             <p>{rentConditions[3]}</p>
//           </li>
//           <li className={css.itemRental}>
//             <p>{"Mileage: "}</p>
//             <span className={css.itemAccent}>{mile}</span>
//           </li>
//           <li className={css.itemRental}>
//             <p>{"Price: "}</p>
//             <span
//               className={css.itemAccent}
//             >{`${price}$`}</span>
//           </li>
//         </ul>
//       </div>

//       <a href="tel:+380730000000" className={css.linkModal}>
//         Rental car
//       </a>
//     </div>
//   );
// }
