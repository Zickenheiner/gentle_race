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
  const [numberOfPlayers] = useState(2);

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
        />
      </div>
      <button type="button" className="button-start-game">
        Lancer la partie
      </button>
    </div>
  );
}
