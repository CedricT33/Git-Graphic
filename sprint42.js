//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint42 = creerGitGraph("graph-container-42");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint42);

var integration = master.branch("master (=22.4)");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS



// MERGES --------------------


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint42b = creerGitGraph("graph-container-42b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint42b);
masterQH7.commit("start");


// MERGES --------------------
