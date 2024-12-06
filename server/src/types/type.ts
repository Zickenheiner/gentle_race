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
