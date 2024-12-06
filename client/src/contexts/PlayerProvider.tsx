import { type ReactNode, createContext, useContext, useState } from "react";
import type { Player, PlayerContextType } from "../types/type";

export const PlayerContext = createContext<PlayerContextType | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);
  const [winnerPlayer, setWinnerPlayer] = useState<Player | null>(null);
  return (
    <PlayerContext.Provider
      value={{ currentPlayer, setCurrentPlayer, winnerPlayer, setWinnerPlayer }}
    >
      {children}
    </PlayerContext.Provider>
  );
}

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error("usePlayer must be used within a PlayerProvider");
  }
  return context;
};
