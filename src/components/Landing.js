import { Link } from 'react-router-dom';
//import Welcome from '../images/landing.jpeg';

const Landing = () => {
  return (
    <>
      <Link to="/house" className="button">
        Game of Thrones
      </Link>
    </>
  );
};

export default Landing;
