import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import logo from "../assets/images/logo_gentle_race.png";

export default function Home() {
  const navigate = useNavigate();

  const handleClickHost = () => {
    navigate("/host");
  };

  const handleClickJoin = () => {
    navigate("/join");
  };

  return (
    <div className="home-container">
      <img className="home-logo" src={logo} alt="logo" />
      <button type="button" className="home-button" onClick={handleClickHost}>
        Créer une partie
      </button>
      <button type="button" className="home-button" onClick={handleClickJoin}>
        Rejoindre une partie
      </button>
    </div>
  );
}
