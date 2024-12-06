import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import {
  changeIsPlaying,
  createGame,
  getAllNiceActions,
  getGames,
  getNiceActions,
  nextRound,
  updateScore,
} from "./modules/games/gamesActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.post("/api/games", createGame);
router.get("/api/games", getGames);
router.get("/api/action", getNiceActions);
router.get("/api/all-actions", getAllNiceActions);
router.post("/api/score", updateScore);
router.post("/api/is-playing", changeIsPlaying);
router.post("/api/next-round", nextRound);
/* ************************************************************************* */

export default router;
