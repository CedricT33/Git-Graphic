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
var sprint36 = creerGitGraph("graph-container-36");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint36);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var fonctionnaliteApplepay = creerBrancheDeFonctionnalite("feat/applepay");
var tache24831 = creerBrancheDeTache(fonctionnaliteApplepay, "task/24831-controle-acces-service");
var ano_26733 = creerBrancheAnomalie(master, "fix/26733-popin-debranchement-externe-popin-wizibii");


// MERGES --------------------


// FUSION --------------------
