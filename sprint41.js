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
var sprint41 = creerGitGraph("graph-container-41");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint41);

var integration = master.branch("master (=22.5)");
integration.commit("start");

var integration22_4 = master.branch("support/22.4");
integration22_3.commit("start");

var integration22_3 = master.branch("support/22.3");
integration22_3.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS




// MERGES --------------------



//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint41b = creerGitGraph("graph-container-41b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint41b);
masterQH7.commit("start");
