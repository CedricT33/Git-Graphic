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
var sprint43 = creerGitGraph("graph-container-43");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint43);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var tache29872 = creerBrancheDeTache(fonctionnaliteCashback, "task/29872_cashback_point_entree_gerer");



// MERGES --------------------



//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint43b = creerGitGraph("graph-container-43b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint43b);
masterQH7.commit("start");

var fonctionnaliteCashbackQH7 = creerBrancheDeFonctionnalite("feat/cashback");
var tache29872QH7 = creerBrancheDeTache(fonctionnaliteCashbackQH7, "task/29872_modification_appel_eligibilite_clo");

// MERGES --------------------

