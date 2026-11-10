// Réglages de Croquette Cat.
// Modifie ces valeurs pour équilibrer le jeu sans toucher au reste du code.

const LARGEUR = 480; // largeur logique du canvas
const HAUTEUR = 720; // hauteur logique du canvas

// Types d'objets qui tombent.
const CRISTAL = "cristal";
const GLACE = "glace";
const BOMBE = "bombe";
const DORE = "dore";
const BOUCLIER = "bouclier";

const COULEURS = {
  fond: "#211b27",
  cyan: "#e7a84b",
  glace: "#9be7ff",
  magenta: "#d98a5f",
  or: "#f4d06f",
  rouge: "#d95763",
  bouclier: "#b86bff",
  blanc: "#fff8e8",
  grille: "rgba(255, 248, 232, 0.12)"
};

const REGLAGES = {
  viesDepart: 3,
  vitessePanier: 560,    // pixels par seconde au clavier
  vitesseChute: 145,     // vitesse du premier niveau
  vitesseChuteMax: 430,
  intervalleObjet: 0.95, // secondes entre deux objets
  intervalleMin: 0.34,
  dureeNiveau: 18,       // secondes avant d'accélérer
  dureeCombo: 3,         // secondes pour enchaîner
  multiplicateurMax: 5,
  hasardBombe: 0.14,
  hasardDore: 0.05,
  hasardGlace: 0.02,
  hasardBouclier: 0.03,
  ralentissementGlace: 0.5,
  dureeGlace: 4,
  largeurPanier: 96,
  hauteurPanier: 16,
  margePanier: 12
};

const CLE_RECORD = "pluieDeNeonRecord";
