// On instancie le graph dans le conteneur.
var sprint10 = creerGitGraph("graph-container-10");

// Branche MASTER
var master = creerBrancheMaster(sprint10);

var integration = master.branch("integration_systemteam_R20_5");
integration.commit("start");



// Branches FONCTIONNALITE et TACHES
var anomalie1 = creerBrancheAnomalie(integration, "a_4520-ios-click-to-call");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_localstorage");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_5246_local_storage_amelioration");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_IARD");
var anomalie2 = creerBrancheAnomalie(fonctionnalite2, "a_5361_redirection_iard");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache2 = creerBrancheDeTache(fonctionnalite3, "t_5272_fluidifier_ouvertures_notifications");
var tache3 = creerBrancheDeTache(integration, "t_5174_clean_sonar");



// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r05_s02");


// Branche MERGE


// MERGES --------------------



// FUSION aprés DEMO
