// On instancie le graph dans le conteneur.
var sprint17 = creerGitGraph("graph-container-17");

// Branche MASTER
var master = creerBrancheMaster(sprint17);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_gestion_cookies");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t-6396-gestion-cookies-mode-non-connecte");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_C+_twenty");
var tache2 = creerBrancheDeTache(fonctionnalite2, "(t_8494-rationalisation-des-stripes");
var tache3 = creerBrancheDeTache(tache1, "t-7318-cookies-refonte-css-mode-connecte");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s02 (21.2.0.215)");


// MERGES --------------------


// FUSION APRES DEMO --------------------
