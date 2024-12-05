import { useNavigate } from "react-router-dom";
import "../styles/Join.css";

export default function Join() {
  const navigate = useNavigate();

  const handleClickJoin = () => {
    navigate("/player-select");
  };

  return (
    <div className="join-container">
      <p>Renseigner l'ID de la partie</p>
      <input type="text" />
      <button type="button" className="join-button" onClick={handleClickJoin}>
        Rejoindre
      </button>
    </div>
  );
}
