import type { RequestHandler } from "express";
import { uid } from "uid";
import type { Game } from "../../types/type";

export const games = [] as Game[];

export const createGame: RequestHandler = (req, res) => {
  const { numberOfPlayers, players } = req.body;

  const allPlayers = [];
  for (const namePlayer of players) {
    const player = {
      id: uid(6),
      name: namePlayer,
      score: 0,
      color: "red",
    };
    allPlayers.push(player);
  }
  const id = uid(6);
  const game = { id, allPlayers, tour: 1, winCondition: 20 };
  games.push(game);
  res.status(201).json({ id });
};

export const getGames: RequestHandler = (req, res) => {
  res.status(200).json(games);
};
