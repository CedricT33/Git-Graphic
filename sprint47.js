//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(brancheVersLaquelleOnMerge, brancheQuiVaDansLAutre);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint47 = creerGitGraph("graph-container-47");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint47);

var integration = master.branch("master (=23.1)");
integration.commit("start");

//Branche de fusion

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteWIZBII = creerBrancheDeFonctionnalite("feat/twenty/wizbee");
var tache32803 = creerBrancheDeTache(fonctionnaliteWIZBII, "task/32803");

var fonctionnaliteFULLIP = creerBrancheDeFonctionnalite("feat/twenty/Q4Q-31470");

var brancheSprint = creerBrancheDeSprint("DEV/23_1");
// MERGES --------------------


// FUUUUUUUSION -------------------





//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint47b = creerGitGraph("graph-container-47b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint47b);
masterQH7.commit("start");

var featFraudManager = creerBrancheDeTache(masterQH7, "feat/twenty/Q4Q-29158");




// MERGES --------------------
