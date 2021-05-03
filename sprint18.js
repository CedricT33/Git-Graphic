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
var anomalie7325 = creerBrancheAnomalie(integration, "a_7325-smartblette-maj-app-profil");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var anomalie9123 = creerBrancheAnomalie(fonctionnalite2, "a_9123-notif-AMM-back-faceID");
var anomalie9132 = creerBrancheAnomalie(fonctionnalite2, "a_9132-notif-AMM-sans-code");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// MERGES --------------------



// FUSION APRES DEMO --------------------

