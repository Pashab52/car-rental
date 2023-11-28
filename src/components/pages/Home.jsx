
import { Link } from "react-router-dom";
import css from './Home.module.css';
const Home = () => {

  return (
    <div className={css.homeContainer}>
    
        <p className={css.homeTxt}>
          Hello! On this site you can find a car that suits
          you and rent it!
        </p>
        <Link className={css.homeBtn} to="catalog">
          Rent a car
        </Link>

    </div>
  );
};

export default Home;
