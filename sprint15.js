// On instancie le graph dans le conteneur.
var sprint15 = creerGitGraph("graph-container-15");

// Branche MASTER
var master = creerBrancheMaster(sprint15);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var ano6782 = creerBrancheAnomalie(fonctionnalite1, "a_6782 (Simplification Notifs)");
var ano6786 = creerBrancheAnomalie(fonctionnalite1, "a_6786 (Simplification Notifs)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");

var ano7290 = creerBrancheAnomalie(integration, "a_7290-Bic_repetition");

// Branche SPRINT


// MERGES --------------------


// Merge branche sprint


// FUSION aprés DEMO
