import { useState } from "react";
import "../styles/Host.css";
import Slider from "@mui/material/Slider";

const marks = [
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 6, label: "6" },
];

export default function Host() {
  const [numberOfPlayers, setNumberOfPlayers] = useState(2);

  const handleNumberOfPlayersChange = (_: Event, value: number | number[]) => {
    setNumberOfPlayers(value as number);
  };

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
          color="warning"
          value={numberOfPlayers}
          onChange={handleNumberOfPlayersChange}
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
            />
          );
        })}
      </div>
      <button type="button" className="button-start-game">
        Lancer la partie
      </button>
    </div>
  );
}
