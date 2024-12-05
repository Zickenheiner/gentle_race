import { useEffect, useState } from "react";
import "../styles/PlayerSelect.css";
import { useNavigate, useParams } from "react-router-dom";
import { usePlayer } from "../contexts/PlayerProvider";
import type { Player } from "../types/type";
const { VITE_API_URL } = import.meta.env;

export default function PlayerSelect() {
  const { game_id } = useParams();
  const [players, setPlayers] = useState<Player[]>([]);
  const { setCurrentPlayer } = usePlayer();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`${VITE_API_URL}/api/games`);
      const data = await response.json();

      const game = data.find((game: { id: string }) => game.id === game_id);

      setPlayers(game.allPlayers.map((player: Player) => player));
    };
    fetchPlayers();
  }, [game_id]);

  return (
    <div className="player-select-container">
      <p>ID de la partie : {game_id}</p>
      <h2>Sélectionnez votre nom !</h2>
      <div className="select-name-buttons">
        {players.map((player) => (
          <button
            type="button"
            key={player.id}
            onClick={() => {
              setCurrentPlayer(player);
              navigate(`/dashboard/${game_id}/${player.id}`);
            }}
          >
            {player.name}
          </button>
        ))}
      </div>
    </div>
  );
}
