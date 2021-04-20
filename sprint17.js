// On instancie le graph dans le conteneur.
var sprint17 = creerGitGraph("graph-container-17");

// Branche MASTER
var master = creerBrancheMaster(sprint17);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_gestion_cookies");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t-6396-gestion-cookies-mode-non-connecte");
var tache3 = creerBrancheDeTache(tache1, "t-7318-cookies-refonte-css-mode-connecte");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_C+_twenty");
var tache2 = creerBrancheDeTache(fonctionnalite2, "t_8494-rationalisation-des-stripes");
var tache4 = creerBrancheDeTache(fonctionnalite2, "t_8573-certicode-plus-renommage-stripes");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f-mandat-prelevement");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_LBPF");
var tache5 = creerBrancheDeTache(fonctionnalite4, "t_8408-lbpf-changement-urls");
var tache6 = creerBrancheDeTache(fonctionnalite4, "t_7431-lbpf-evenement");
var tache7 = creerBrancheDeTache(fonctionnalite4, "t_7656-retour-stripe-credit-renouvelable");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_simplification_notifs_21_2");
var anomalie1 = creerBrancheAnomalie(integration, "a_7325-smartblette-maj-app-profil");
var anomalie2 = creerBrancheAnomalie(integration, "a_9143-LBPF-iframe-affichage");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02");


// MERGES --------------------
creerMerge(fonctionnalite1, tache1);
creerMerge(fonctionnalite1, tache3);
creerMerge(integration, fonctionnalite5);
creerMerge(fonctionnalite1, integration);
creerMerge(integration, anomalie1);
// FUSION APRES DEMO --------------------

//-------------------------QH5---------------------------//


// On instancie le graph dans le conteneur.
var sprint17b = creerGitGraph("graph-container-17b");

// Branche MASTER
var masterQH5 = creerBrancheMasterQH5(sprint17b);

var integrationQH5 = masterQH5.branch("integration_08_39_00.xxx");
integrationQH5.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache7899 = creerBrancheDeTache(integrationQH5, "t_7899_solde_OP");
var tache6490 = creerBrancheDeTache(integrationQH5, "t_6490_suppression_projet_satin");
