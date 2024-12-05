import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import { createGame, getGames } from "./modules/games/gamesActions";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);
router.post("/api/games", createGame);
router.get("/api/games", getGames);
/* ************************************************************************* */

export default router;
