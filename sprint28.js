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
var fonctionnalite_temp= creerBrancheDeTache(fonctionnalite1, "f_rubrique_offres_sprint1_semaine1");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_19054-creation-de-la-rubrique-offres");
var tache3 = creerBrancheDeTache(fonctionnalite1, "t_19054-rubrique-offres-menu-gerer");
var tache5 = creerBrancheDeTache(fonctionnalite1, "t_18468-rubrique-offres-niveau-1");
var tache4 = creerBrancheDeTache(fonctionnalite1, "t_18597_rubrique_offres_niveau_2");
var tache2 = creerBrancheDeTache(integration, "t_17355-Mise_en_conformite_dsp2");
var ano17495 = creerBrancheAnomalie(integration, "a_17495");
var ano18811 = creerBrancheAnomalie(integration, "a_18811");
var ano18811 = creerBrancheAnomalie(integration, "a_20207");
var ano18811 = creerBrancheAnomalie(integration, "a_20293");
var ano2792 = creerBrancheDeTache(integration, "t_2792-RefactoCarte");
var ano18588 = creerBrancheAnomalie(integration, "a_18588");

// MERGES --------------------
creerMerge(integration, ano17495);
creerMerge(fonctionnalite_temp, tache1);
creerMerge(fonctionnalite_temp, tache3);
creerMerge(fonctionnalite_temp, tache5);
creerMerge(fonctionnalite_temp, tache4);
creerMerge(integration, ano18588);
creerMerge(fonctionnalite1, tache1);
creerMerge(fonctionnalite1, tache3);

