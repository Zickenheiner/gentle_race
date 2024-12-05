import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

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
      <button type="button" className="home-button" onClick={handleClickHost}>
        Créer une partie
      </button>
      <button type="button" className="home-button" onClick={handleClickJoin}>
        Rejoindre une partie
      </button>
    </div>
  );
}
