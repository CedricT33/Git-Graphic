// On instancie le graph dans le conteneur.
var sprint18 = creerGitGraph("graph-container-18");

// Branche MASTER
var master = creerBrancheMaster(sprint18);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_C+_twenty");
var anomalie9020 = creerBrancheAnomalie(fonctionnalite1, "a_9020-affichage-C+");
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
creerMerge(fonctionnalite1, tache2);
creerMerge(fonctionnalite1, tache1);
creerMerge(fonctionnalite1, anomalie9481);
creerMerge(fonctionnalite2, anomalie9132);
creerMerge(integration, anomalie8594);
integration.commit("V21.02.00.906 et 907"); // tag
creerMerge(brancheSprint, anomalie7325);
creerMerge(brancheSprint, fonctionnalite2);
creerMerge(brancheSprint, fonctionnalite1);



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
var tache7899 = creerBrancheDeTache(integrationQH5, "release/a_9461");
var ano5368 = creerBrancheDeTache(integrationQH5, "release/a_5368");
var brancheMergeQH5 = creerBrancheDeMerge(integrationQH5, "release/twenty_20_2_sprint_3");


// MERGES --------------------
creerMerge(tache8697, ano5368);
creerMerge(brancheMergeQH5, tache8697);
creerMerge(brancheMergeQH5, tache7899);

