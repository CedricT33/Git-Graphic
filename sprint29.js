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
var sprint29 = creerGitGraph("graph-container-29");


// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint29);

var integration = master.branch("integration_22_1");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache1= creerBrancheDeTache(fonctionnalite1, "t_20615-niveau-2-credit-consommation");
var tache2= creerBrancheDeTache(fonctionnalite1, "t_19516-modification-FAQ");
creerMerge(fonctionnalite1, tache1);
var tache4= creerBrancheDeTache(fonctionnalite1, "t_18869-niveau-3-comptes-et-cartes");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_sdkta-5_11");
var tache3 = creerBrancheDeTache(integration, "t_17355_mise_en_conformite_dsp2");

// BRANCHE DE DEMO


// MERGES --------------------


// FUSION --------------------



//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint29b = creerGitGraph("graph-container-29b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint29b);

var integrationQH7 = masterQH7.branch("integration_22_02");
integrationQH7.commit("start");

var fonctionnalite1QH7 = creerBrancheDeMerge(integrationQH7, "f_migration_pop");
var tache2968QH7 = creerBrancheDeTache(fonctionnalite1QH7, "t_2968-migration-mono-repo");
// creerMerge(f_migration_pop, tache2968QH7);
