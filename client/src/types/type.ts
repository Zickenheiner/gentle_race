export interface PlayerContextType {
  currentPlayer: Player | null;
  setCurrentPlayer: (player: Player) => void;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  joker: [];
  color: string;
}

export interface Game {
  tour: number;
  allPlayers: Player[];
}
