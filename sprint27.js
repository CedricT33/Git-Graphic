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
var ano16771 = creerBrancheAnomalie(integration, "a_16771-spay-numeros-de-tel-ko");
var ano16896 = creerBrancheAnomalie(integration, "a_16896-spay-bouton-deconnexion");
var ano16903 = creerBrancheAnomalie(integration, "a_16903-spay-header-non-centre");
var ano16829 = creerBrancheAnomalie(integration, "a_16829-spay-non-expiration-session");
// Branche SPRINT


// MERGES --------------------
creerMerge(integration, ano16933);
creerMerge(integration, ano16771);
creerMerge(integration, ano16896);
creerMerge(integration, ano16903);
//creerMerge(integration, ano16829);
// FUSION --------------------

