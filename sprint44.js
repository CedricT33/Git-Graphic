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
var sprint44 = creerGitGraph("graph-container-44");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint44);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteSAMEPARGNE = creerBrancheDeFonctionnalite("feat/sam_epargne");
var tache29898 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28297_sam_epargne_tags_post_message (+30737+29126)");

var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/sam");
var tache30602 = creerBrancheDeTache(fonctionnaliteSAM, "task/30602_eligibilite_contralia");

var fonctionnaliteCOOKIES = creerBrancheDeFonctionnalite("feat/cookies");
var tache29478 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/29478_cookies_valorisation");
var tache30198 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/30198-enabler-focus-cookies");

var fonctionnaliteCASHBACK = creerBrancheDeFonctionnalite("feat/cashback");
var tache30697 = creerBrancheDeTache(fonctionnaliteCASHBACK, "task/30697_optimisation_QH7");

var brancheSprint = creerBrancheDeSprint("twenty_r05_s02");


// MERGES --------------------
