export interface PlayerContextType {
  currentPlayer: Player | null;
  setCurrentPlayer: (player: Player) => void;
  winnerPlayer: Player | null;
  setWinnerPlayer: (player: Player) => void;
}

export interface Game {
  id: string;
  allPlayers: Player[];
  round: number;
  winCondition: number;
}

export interface Player {
  id: string;
  name: string;
  score: number;
  color: string;
  actionID: number;
  isPlaying: boolean;
}
