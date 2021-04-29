// On instancie le graph dans le conteneur.
var sprint18 = creerGitGraph("graph-container-18");

// Branche MASTER
var master = creerBrancheMaster(sprint18);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_C+_twenty");
var anomalie9020 = creerBrancheAnomalie(fonctionnalite1, "a_9020-affichage-C+");
var anomalie7325 = creerBrancheAnomalie(integration, "a_7325-smartblette-maj-app-profil");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_simplification_notifs");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// MERGES --------------------



// FUSION APRES DEMO --------------------

