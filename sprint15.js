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
var ano7294 = creerBrancheAnomalie(integration, "a_7294-Stripes_inactives_agregateur");
var ano7140 = creerBrancheAnomalie(integration, "a_7140_ouverture_notification");
var ano7108 = creerBrancheAnomalie(integration, "a_7108_service_indisponible_dashboard");
var ano7503 = creerBrancheAnomalie(integration, "a_7503_popin_cvs");
var ano7556 = creerBrancheAnomalie(integration, "a_7556-perso-carte-chevron-back-ko");


// MERGES --------------------
creerMerge(integration, ano7140);
creerMerge(integration, ano7290);
integration.commit("V21.01.00.912 et 913"); // tag



//-------------------------QH7---------------------------//


// On instancie le graph dans le conteneur.
var sprint15b = creerGitGraph("graph-container-15b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint15b);

var integrationQH7 = masterQH7.branch("integration_0_10");
integrationQH7.commit("start");

// Branches FONCTIONNALITE et TACHES


// MERGES --------------------


