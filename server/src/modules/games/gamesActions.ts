import type { RequestHandler } from "express";
import { uid } from "uid";
import type { Game } from "../../types/type";

export const games = [] as Game[];
const niceActions = [
  {
    id: "1",
    action: "Appeler un ami que vous n'avez pas contacté depuis longtemps",
    niveau: 2,
  },
  {
    id: "2",
    action: "Écrire un message de gratitude à quelqu'un qui compte pour vous",
    niveau: 2,
  },
  {
    id: "3",
    action: "Offrir votre aide à un proche qui traverse une période difficile",
    niveau: 3,
  },
  {
    id: "4",
    action: "Écouter attentivement quelqu'un sans jugement",
    niveau: 1,
  },
  { id: "5", action: "Faire un don à une association caritative", niveau: 2 },
  { id: "6", action: "Proposer vos services comme bénévole", niveau: 3 },
  { id: "7", action: "Aider un voisin avec une tâche", niveau: 2 },
  {
    id: "8",
    action: "Donner des vêtements ou des objets dont vous n'avez plus besoin",
    niveau: 1,
  },
  { id: "9", action: "Faire un compliment sincère à quelqu'un", niveau: 1 },
  { id: "10", action: "Sourire aux personnes que vous croisez", niveau: 1 },
  {
    id: "11",
    action: "Céder votre place dans les transports ou dans une file d'attente",
    niveau: 2,
  },
  {
    id: "12",
    action: "Remercier les personnes qui vous rendent service",
    niveau: 1,
  },
  {
    id: "13",
    action: "Prendre du temps pour méditer ou faire une activité relaxante",
    niveau: 2,
  },
  {
    id: "14",
    action: "S'accorder du pardon pour ses propres erreurs",
    niveau: 3,
  },
  { id: "15", action: "Célébrer ses petits succès", niveau: 1 },
  { id: "16", action: "Pratiquer la gratitude chaque jour", niveau: 2 },
  { id: "17", action: "Féliciter un collègue pour son travail", niveau: 1 },
  {
    id: "18",
    action: "Proposer votre aide à quelqu'un qui semble débordé",
    niveau: 2,
  },
  {
    id: "19",
    action: "Être patient et compréhensif avec les erreurs des autres",
    niveau: 3,
  },
  {
    id: "20",
    action: "Créer une atmosphère positive et encourageante",
    niveau: 2,
  },
  { id: "21", action: "Offrir un café ou un thé à un collègue", niveau: 1 },
  {
    id: "22",
    action: "Écrire une carte de remerciement manuscrite",
    niveau: 2,
  },
  {
    id: "23",
    action: "Aider un étudiant ou un junior à développer ses compétences",
    niveau: 3,
  },
  {
    id: "24",
    action: "Partager un article ou une ressource utile à quelqu'un",
    niveau: 1,
  },
  {
    id: "25",
    action: "Prendre soin d'un animal de compagnie pour un proche",
    niveau: 2,
  },
  {
    id: "26",
    action: "Faire un geste pour l'environnement (ramasser des déchets, trier)",
    niveau: 1,
  },
  {
    id: "27",
    action:
      "Écouter de la musique ou lire un livre qui fait du bien à votre âme",
    niveau: 1,
  },
  {
    id: "28",
    action: "Organiser une collecte de dons pour une cause",
    niveau: 3,
  },
  { id: "29", action: "Partager un moment de rire avec quelqu'un", niveau: 1 },
  { id: "30", action: "Pardonner une erreur ou un malentendu", niveau: 3 },
  { id: "31", action: "Cuisiner un repas pour quelqu'un", niveau: 2 },
  {
    id: "32",
    action: "Envoyer un message d'encouragement à quelqu'un qui en a besoin",
    niveau: 1,
  },
  { id: "33", action: "Faire un petit cadeau surprise", niveau: 2 },
  {
    id: "34",
    action:
      "Consacrer du temps à écouter une personne âgée raconter ses souvenirs",
    niveau: 2,
  },
  {
    id: "35",
    action: "Proposer de garder les enfants d'un parent qui en a besoin",
    niveau: 3,
  },
  { id: "36", action: "Aider quelqu'un à porter ses courses", niveau: 1 },
  {
    id: "37",
    action: "Écrire une recommandation ou un témoignage positif pour quelqu'un",
    niveau: 2,
  },
  { id: "38", action: "Faire un don de sang", niveau: 3 },
  {
    id: "39",
    action: "Inviter quelqu'un qui se sent seul à partager un repas",
    niveau: 3,
  },
  { id: "40", action: "Arrêter de critiquer pendant une journée", niveau: 2 },
  { id: "41", action: "Offrir son aide pour réparer quelque chose", niveau: 2 },
  {
    id: "42",
    action: "Éteindre son téléphone pour être pleinement présent",
    niveau: 1,
  },
  { id: "43", action: "Faire un atelier ou un cours bénévole", niveau: 3 },
  { id: "44", action: "Acheter un repas à un sans-abri", niveau: 2 },
  {
    id: "45",
    action: "Remplacer un mot négatif par un mot positif",
    niveau: 1,
  },
  { id: "46", action: "Planter un arbre ou une plante", niveau: 2 },
  {
    id: "47",
    action: "Organiser une séance de méditation de groupe",
    niveau: 3,
  },
  {
    id: "48",
    action: "Écrire des mots d'encouragement sur des post-it et les distribuer",
    niveau: 1,
  },
  {
    id: "49",
    action: "Offrir son expertise gratuitement à une association",
    niveau: 3,
  },
  {
    id: "50",
    action: "Dire 'merci' à quelqu'un pour son existence",
    niveau: 2,
  },
];

export const createGame: RequestHandler = (req, res) => {
  const { players } = req.body;
  const randomCardId = Math.floor(Math.random() * niceActions.length);
  const allPlayers = [];
  for (const namePlayer of players) {
    const player = {
      id: uid(6),
      name: namePlayer,
      actionID: randomCardId,
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

export const getNiceActions: RequestHandler = (req, res) => {
  const { actionID } = req.params;
  res.status(200).json(niceActions[Number.parseInt(actionID)]);
};

export const getGames: RequestHandler = (req, res) => {
  res.status(200).json(games);
};
