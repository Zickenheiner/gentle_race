import { useNavigate, useParams } from "react-router-dom";
import "../styles/Dashboard.css";
import { useEffect, useState } from "react";
import lapIcon from "../assets/images/circuit.png";
import type { Game, Player } from "../types/type";
const { VITE_API_URL } = import.meta.env;

export default function Dashboard() {
  const { player_id, game_id } = useParams();
  const navigate = useNavigate();
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [action, setAction] = useState<{
    action: string;
    niveau: string;
  } | null>(null);
  const [game, setGame] = useState<Game | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPlayers = async () => {
      const response = await fetch(`${VITE_API_URL}/api/games`);
      const data = await response.json();

      const game = data.find((game: { id: string }) => game.id === game_id);
      for (const player of game.allPlayers) {
        if (player.score >= 20) {
          navigate(`/winner/${game.id}/${player.name}`);
        }
      }
      const player = game.allPlayers.find(
        (player: { id: string }) => player.id === player_id,
      );
      setCurrentPlayer(player);
      setGame(game);
      setLoading(false);
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
  }, [game_id, player_id, currentPlayer, navigate]);

  const handleClickUpdateScore = async () => {
    await fetch(
      `${VITE_API_URL}/api/score?playerId=${player_id}&gameId=${game_id}&score=${action?.niveau}`,
      {
        method: "POST",
      },
    );
    await fetch(
      `${VITE_API_URL}/api/is-playing?gameId=${game_id}&playerId=${player_id}`,
      {
        method: "POST",
      },
    );
  };

  function scheduleTaskAtMidnight(task: () => void) {
    function scheduleMidnight() {
      const now = new Date();
      const nextMidnight = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        0,
        0,
        0,
      );

      const msUntilMidnight = nextMidnight.getTime() - now.getTime();
      setTimeout(() => {
        task();
        scheduleMidnight();
      }, msUntilMidnight);
    }
    scheduleMidnight();
  }

  const nextRound = async () => {
    await fetch(`${VITE_API_URL}/api/next-round?gameId=${game_id}`, {
      method: "POST",
    });
  };

  scheduleTaskAtMidnight(() => {
    fetch(`${VITE_API_URL}/api/next-round?gameId=${game_id}`, {
      method: "POST",
    });
  });

  if (loading) {
    return <div> </div>;
  }

  return (
    <div className="dashboard-container">
      <div className="dashboard-title-bar">
        <div>
          <p>{currentPlayer?.name}</p>
        </div>
        <div className="lap-container">
          <img className="lap-icon" src={lapIcon} alt="" />
          <p>Tour {game?.round}</p>
        </div>
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
      {!currentPlayer?.isPlaying ? (
        <div className="action-container">
          <p className="action-card">{action?.action}</p>
          <div>
            <button
              className="dashboard-button"
              onClick={handleClickUpdateScore}
              type="button"
            >
              Mission Accomplie
            </button>
          </div>
        </div>
      ) : (
        <p>Mission accomplie ! À demain pour une nouvelle bonne action</p>
      )}
      <button className="dashboard-button" type="button" onClick={nextRound}>
        Jour suivant
      </button>
    </div>
  );
}
