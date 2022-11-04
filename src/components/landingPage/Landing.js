import "./landing.css";
import { Link } from "react-router-dom";
import play from "../../assets/images/game.png";
import rewards from "../../assets/images/rewards.png";
const Landing = () => {
  return (
    <section className="landing_outer_container">
      <div className="landing_inner_container">
        <Link className="linkbutton" to="/play">
          <button className="playButton comic">
            Play
            <img width="80px" src={play} alt="play icon" />
          </button>
        </Link>
        <Link className="linkbutton" to="/scores">
          
          <button className="rewardButton comic">
            See Scores
            <img width="80px" src={rewards} alt="rewards icon" />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Landing;
