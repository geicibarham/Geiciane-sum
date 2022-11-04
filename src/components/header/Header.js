import "./header.css";
import trophy from "../../assets/images/rewards.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Link className="link" to="/">
        <h1>Sum and Have Fun!</h1>
      </Link>

      <Link to="/scores">
        <img width="50px" src={trophy} alt="trophy icon" />
      </Link>
    </header>
  );
};

export default Header;
