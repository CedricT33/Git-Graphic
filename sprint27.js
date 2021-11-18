//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V21.04.00.9XX et 9XX"); // tag
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
var ano17332 = creerBrancheAnomalie(integration, "a_17332-parcours-spay-ccs");
var ano17495 = creerBrancheAnomalie(integration, "a_17495");
var tache16374 = creerBrancheDeTache(integration, "t_16374-spay-clean-code-poc");
var ano17644 = creerBrancheAnomalie(integration, "a_17644-spay-time-out-5min");
var ano17604 = creerBrancheAnomalie(integration, "a_17604-xpay-numeros-de-tel-ko");
var ano17597 = creerBrancheAnomalie(integration, "a_17597");


// MERGES --------------------
creerMerge(integration, ano17346);
creerMerge(integration, ano16933);
creerMerge(integration, ano16771);
creerMerge(integration, ano16896);
creerMerge(integration, ano16903);
creerMerge(integration, ano16829);
creerMerge(integration, ano17332);
creerMerge(integration, tache16374);
creerMerge(integration, ano17644);
creerMerge(integration, ano17604);
integration.commit("V21.04.00.920 et 921"); // tag
creerMerge(integration, ano17597);
