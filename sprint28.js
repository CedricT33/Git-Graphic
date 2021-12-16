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
var sprint28 = creerGitGraph("graph-container-28");


// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint28);

var integration = master.branch("integration_22_1");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_19054-creation-de-la-rubrique-offres");
var tache3 = creerBrancheDeTache(fonctionnalite1, "t_19054-rubrique-offres-menu-gerer");
var tache2 = creerBrancheDeTache(integration, "t_17355-Mise_en_conformite_dsp2");
var tache4 = creerBrancheDeTache(integration, "t_18468-rubrique-offres-niveau-1");
var ano17495 = creerBrancheAnomalie(integration, "a_17495");
var ano18811 = creerBrancheAnomalie(integration, "a_18811");
var ano2792 = creerBrancheDeTache(integration, "t_2792-RefactoCarte");

// MERGES --------------------
creerMerge(tache4, tache1);
creerMerge(tache4, tache3);
creerMerge(integration, ano17495);
