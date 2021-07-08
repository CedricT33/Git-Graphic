// On instancie le graph dans le conteneur.
var sprint21 = creerGitGraph("graph-container-21");

// Branche MASTER
var master = creerBrancheMaster(sprint21);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var anomalie9174 = creerBrancheAnomalie(integration, "a_9174-lbpf-mauvais-affichage-credit-renouvelable");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_7331-table-aem-hash");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_refonte_nav");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r03_s02");

// MERGES --------------------
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V21.03.00.xxx et xxx"); // tag
