//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V21.04.00.914 et 915"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint27 = creerGitGraph("graph-container-27");


// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint27);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var ano17346 = creerBrancheAnomalie(integration, "a_17346_total_avoirs");
var ano16933 = creerBrancheAnomalie(integration, "a_16933-spay-saisie-faux-mpins");


// Branche SPRINT


// MERGES --------------------


// FUSION --------------------

