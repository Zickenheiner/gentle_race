export interface PlayerContextType {
  currentPlayer: Player | null;
  setCurrentPlayer: (player: Player) => void;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  actionID: string;
  color: string;
}

export interface Game {
  tour: number;
  allPlayers: Player[];
}
