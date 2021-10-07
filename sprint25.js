// On instancie le graph dans le conteneur.
var sprint25 = creerGitGraph("graph-container-25");

// Branche MASTER
var master = creerBrancheMaster(sprint25);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_s2");

var fonctionnalite1 = creerBrancheDeFonctionnalite("f_spay");
var tache15935 = creerBrancheDeTache(fonctionnalite1, "t_spay_menu_gerer_controle_eligibilite_carte (15935)");
var ano_15888 = creerBrancheAnomalie(fonctionnalite1, "a_15888_spay_affichage_anc");
var tache11289 = creerBrancheDeTache(fonctionnalite1, "t_11289-titulaire-carte");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_11264_spay_eligiblite");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache7331 = creerBrancheDeTache(fonctionnalite2, "t_7331-table-aem-hash");
var tache7224 = creerBrancheDeTache(fonctionnalite2, "t_7224-migration-aem");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r04_s02");

// MERGES --------------------
//creerMerge(fonctionnaliteX, tacheX);

// FUSION --------------------

//integration.commit("V21.04.00.9XX et 9XX"); // tag


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint25b = creerGitGraph("graph-container-25b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint25b);

var releaseQH7 = masterQH7.branch("release/21_10_00.xxx");
releaseQH7.commit("start");
var integrationQH7 = creerBrancheDeMerge(releaseQH7, "integration_21_10.xxx");

