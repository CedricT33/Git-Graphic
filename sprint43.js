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


// MERGES --------------------



//-------------------------QH7---------------------------//

