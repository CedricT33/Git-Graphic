// On instancie le graph dans le conteneur.
var sprint18 = creerGitGraph("graph-container-18");

// Branche MASTER
var master = creerBrancheMaster(sprint18);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_C+_twenty");
var anomalie9020 = creerBrancheAnomalie(fonctionnalite1, "a_9020-affichage-C+");
var anomalie10182 = creerBrancheAnomalie(fonctionnalite1, "a_10182-aff-dashboard-code-oublie");
var anomalie10198 = creerBrancheAnomalie(fonctionnalite1, "a_10198-aff-dashboard-code-oublie");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_9324_conformite_mpin_perimer");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_10214-ajout-certicode+-parametres");
var anomalie9481 = creerBrancheAnomalie(fonctionnalite1, "a_9481-couleur-icon-C+");
var anomalie7325 = creerBrancheAnomalie(integration, "a_7325-smartblette-maj-app-profil");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var anomalie9123 = creerBrancheAnomalie(fonctionnalite2, "a_9123-notif-AMM-back-faceID");
var anomalie9132 = creerBrancheAnomalie(fonctionnalite2, "a_9132-notif-AMM-sans-code");
var anomalie8594 = creerBrancheAnomalie(integration, "a_8594-blocage-fin-de-parcours-AF");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// MERGES --------------------
creerMerge(fonctionnalite1, anomalie9020);
creerMerge(integration, anomalie8594);
integration.commit("V21.02.00.906 et 907"); // tag
creerMerge(brancheSprint, anomalie7325);


// FUSION APRES DEMO --------------------



//-------------------------QH5---------------------------//


// On instancie le graph dans le conteneur.
var sprint18b = creerGitGraph("graph-container-18b");

// Branche MASTER
var masterQH5 = creerBrancheMasterQH5(sprint18b);

var integrationQH5 = masterQH5.branch("integration_08_39_00.xxx");
integrationQH5.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache8697 = creerBrancheDeTache(integrationQH5, "t_8697_notification_ajout_beneficiaire");
var tache7899 = creerBrancheDeTache(integrationQH5, "t_7899_solde_OP");


// MERGES --------------------

