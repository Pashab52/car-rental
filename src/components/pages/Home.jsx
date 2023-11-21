
import { Link } from "react-router-dom";

const Home = () => {

  return (
    <div className="homeWrap">
      <h1>Home</h1>
      <p>
        Hello! On this site you can find a car that suits
        you and rent it!
      </p>
      <Link className='link' to="catalog">
        Rent a car
      </Link>
    </div>
  );
};

export default Home;
