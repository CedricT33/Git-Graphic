//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint35 = creerGitGraph("graph-container-35");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint35);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCookies = creerBrancheDeFonctionnalite("feat/cookies");
var ano_25703 = creerBrancheAnomalie(fonctionnaliteCookies, "fix/25703_delai_affichage_AEM");
var ano_25697 = creerBrancheAnomalie(fonctionnaliteCookies, "fix/25697_service_indisponible_cookies");
var ano_24651 = creerBrancheAnomalie(integration, "fix/24651");
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var tache25912 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24751_points_d_entree");


// MERGES --------------------
creerMerge(fonctionnaliteCookies, ano_25703);
creerMerge(fonctionnaliteCookies, ano_25697);
creerMerge(integration, ano_24651);


// FUSION --------------------
