import { useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import type { Game, Player } from "../types/type";
const { VITE_API_URL } = import.meta.env;

export default function Dashboard() {
  const { player_id, game_id } = useParams();
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [action, setAction] = useState<{ action: string } | null>(null);
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`${VITE_API_URL}/api/games`);
      const data = await response.json();

      const game = data.find((game: { id: string }) => game.id === game_id);
      const player = game.allPlayers.find(
        (player: { id: string }) => player.id === player_id,
      );
      setCurrentPlayer(player);
      setGame(game);
    };
    fetchPlayers();
    const fetchAction = async () => {
      const response = await fetch(
        `${VITE_API_URL}/api/action?actionID=${currentPlayer?.actionID}`,
      );
      const data = await response.json();
      setAction(data);
    };
    fetchAction();
  }, [game_id, player_id, currentPlayer]);
  return (
    <div className="dashboard-container">
      <div className="dashboard-title-bar">
        <p>{currentPlayer?.name}</p>
        <p>Tour {game?.tour}</p>
      </div>
      <div className="global-score-container">
        {game?.allPlayers.map((player) => (
          <div
            key={player.id}
            className={`player-score-container ${
              player.id === currentPlayer?.id ? "current-player" : ""
            }`}
          >
            <p>{`${player.score} ${player.score > 1 ? " pts" : " pt"}`}</p>
            <p>{player.name}</p>
          </div>
        ))}
      </div>
      <p>{currentPlayer?.name}</p>
      <p>{action?.action}</p>
    </div>
  );
}
