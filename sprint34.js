//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.01.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint34 = creerGitGraph("graph-container-34");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint34);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("feat/rubrique_offre")
var tache22796 = creerBrancheDeTache(fonctionnalite1, "tache/22796-amelioration-visuels");
var ano_24523  = creerBrancheAnomalie(integration, "fix/24523_erreur_500_faceid");
var ano_24331  = creerBrancheAnomalie(integration, "fix/24331_wizzbi_eligibilite");

// MERGES --------------------


// FUSION --------------------
