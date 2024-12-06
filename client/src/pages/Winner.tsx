import { useParams } from "react-router-dom";
import "../styles/Winner.css";
export default function Winner() {
  const { player } = useParams();
  return (
    <div className="winner-container">
      <h1>Winner is {player}</h1>
    </div>
  );
}
