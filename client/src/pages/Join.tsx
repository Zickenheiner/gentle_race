import { useNavigate } from "react-router-dom";
import "../styles/Join.css";
import { useEffect, useState } from "react";

export default function Join() {
  const navigate = useNavigate();
  const [gameId, setGameId] = useState("");
  const [games, setGames] = useState<{ id: string }[]>([]);

  useEffect(() => {
    const fetchGames = async () => {
      const response = await fetch(`${process.env.VITE_API_URL}/api/games`);
      const data = await response.json();
      setGames(data);
    };
    fetchGames();
  }, []);

  const handleClickJoin = () => {
    if (!gameId) return;
    if (!games.find((game) => game.id === gameId)) {
      alert("La partie n'existe pas");
      return;
    }
    navigate(`/player-select/${gameId}`);
  };

  return (
    <div className="join-container">
      <p>Renseigner l'ID de la partie</p>
      <input
        type="text"
        placeholder="ID de la partie"
        style={{ textAlign: "center" }}
        onChange={(e) => setGameId(e.target.value)}
      />
      <button type="button" className="join-button" onClick={handleClickJoin}>
        Rejoindre
      </button>
    </div>
  );
}
