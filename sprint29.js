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

var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_s2");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache1= creerBrancheDeTache(fonctionnalite1, "t_20615-niveau-2-credit-consommation");
var tache2= creerBrancheDeTache(fonctionnalite1, "t_19516-modification-FAQ");
creerMerge(fonctionnalite1, tache1);
var tache6= creerBrancheDeTache(fonctionnalite1, "t_18869-niveau-3-comptes-et-cartes");
var tache4 = creerBrancheDeTache(fonctionnalite1, "t_20333-parcours-boquants-non-contact");
creerMerge(fonctionnalite1, tache6);
var tache7 = creerBrancheDeTache(fonctionnalite1, "t_19405-rubrique-offres-barre-recherche");
creerMerge(tache2, fonctionnalite1);
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_sdkta-5_11");
var tache3 = creerBrancheDeTache(integration, "t_17355_mise_en_conformite_dsp2");
var tache5 = creerBrancheDeTache(integration, "t_6969_cvs_workaround");
creerMerge(fonctionnalite1, tache2);
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");
creerMerge(brancheSprint, fonctionnalite1);
creerMerge(brancheSprint, tache7);
creerMerge(tache7, fonctionnalite1);
creerMerge(fonctionnalite1, tache7);
creerMerge(brancheSprint, fonctionnalite1);


// FUSION --------------------
creerMerge(brancheMerge, fonctionnalite1);
creerMerge(brancheMerge, fonctionnalite2);
creerMerge(brancheMerge, tache5);
creerMerge(integration, brancheMerge);
integration.commit("V20.21.01.906 et 907"); // tag
creerMerge(integration, tache3);
integration.commit("V20.21.01.910 et 911"); // tag


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
