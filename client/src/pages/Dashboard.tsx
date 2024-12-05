import { useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import type { Player } from "../types/type";

export default function Dashboard() {
  const { player_id, game_id } = useParams();
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`${process.env.VITE_API_URL}/api/games`);
      const data = await response.json();

      const game = data.find((game: { id: string }) => game.id === game_id);
      const player = game.allPlayers.find(
        (player: { id: string }) => player.id === player_id,
      );
      setCurrentPlayer(player);
    };
    fetchPlayers();
  }, [game_id, player_id]);
  return (
    <div className="dashboard-container">
      <p>{currentPlayer?.name}</p>
      <button type="button" className="dashboard-button">
        Joker
      </button>
    </div>
  );
}
