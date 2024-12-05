import { useState } from "react";
import "../styles/Host.css";
import Slider from "@mui/material/Slider";
import { useNavigate } from "react-router-dom";
const { VITE_API_URL } = import.meta.env;

const marks = [
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
];

export default function Host() {
  const navigate = useNavigate();
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);
  const [playerNames, setPlayerNames] = useState<string[]>(Array(2).fill(""));

  const handleClickHost = async () => {
    const players = Array.from(
      document.querySelectorAll<HTMLInputElement>(".input-player"),
    ).map((input) => input.value);

    const response = await fetch(`${VITE_API_URL}/api/games`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ players }),
    });
    const data = await response.json();
    navigate(`/player-select/${data.id}`);
  };

  const handleNumberOfPlayersChange = (_: Event, value: number | number[]) => {
    const newNumberOfPlayers = value as number;
    setNumberOfPlayers(newNumberOfPlayers);
    setPlayerNames((prevNames) =>
      Array(newNumberOfPlayers)
        .fill("")
        .map((_, index) => prevNames[index] || ""),
    );
  };

  const handleInputChange = (index: number, value: string) => {
    setPlayerNames((prevNames) => {
      const newNames = [...prevNames];
      newNames[index] = value;
      return newNames;
    });
  };

  const isButtonDisabled = playerNames.some((name) => name.trim() === "");

  return (
    <div className="host-container">
      <p>Nombre de joueur</p>
      <div className="slider-container">
        <Slider
          aria-label="Nombre de joueur"
          defaultValue={2}
          shiftStep={10}
          step={1}
          marks={marks}
          min={2}
          max={6}
          value={numberOfPlayers}
          onChange={handleNumberOfPlayersChange}
          sx={{
            color: "#c5a574",
            "& .MuiSlider-markLabel": {
              color: "#c5a574",
            },
          }}
        />
      </div>
      <div className="input-container">
        {Array.from({ length: numberOfPlayers }).map((_, index) => {
          const uniqueId = `player-${index}`;
          return (
            <input
              key={uniqueId}
              type="text"
              placeholder={`Joueur ${index + 1}`}
              className="input-player"
              value={playerNames[index]}
              onChange={(e) => handleInputChange(index, e.target.value)}
            />
          );
        })}
      </div>
      <button
        type="button"
        className="button-start-game"
        disabled={isButtonDisabled}
        onClick={handleClickHost}
      >
        Lancer la partie
      </button>
    </div>
  );
}
