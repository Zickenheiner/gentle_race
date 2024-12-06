import "../styles/Winner.css";
import blueCar from "../assets/images/blue_car.svg";
import greenCar from "../assets/images/green_car.svg";
import orangeCar from "../assets/images/orange_car.svg";
import purpleCar from "../assets/images/purple_car.svg";
import redCar from "../assets/images/red_car.svg";
import yellowCar from "../assets/images/yellow_car.svg";
import { usePlayer } from "../contexts/PlayerProvider";

const cars: { [key: string]: string } = {
  orangeCar,
  blueCar,
  greenCar,
  redCar,
  yellowCar,
  purpleCar,
};

export default function Winner() {
  const { winnerPlayer } = usePlayer();
  return (
    <div className="winner-container">
      <h1>
        Bravo 🏆 {winnerPlayer?.name} 🏆,
        <br />
        tu es le/la plus bienveillant(e) !
      </h1>
      <img
        className="winner-player-img"
        src={cars[`${winnerPlayer?.color}Car`]}
        alt=""
      />
    </div>
  );
}
