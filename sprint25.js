// On instancie le graph dans le conteneur.
var sprint25 = creerGitGraph("graph-container-25");

// Branche MASTER
var master = creerBrancheMaster(sprint25);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_s2");

var fonctionnalite1 = creerBrancheDeFonctionnalite("f_spay");

var fonctionnalite2 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache7331 = creerBrancheDeTache(fonctionnalite2, "t_7331-table-aem-hash");
var tache7224 = creerBrancheDeTache(fonctionnalite2, "t_7224-migration-aem");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r04_s02");

// MERGES --------------------
//creerMerge(fonctionnaliteX, tacheX);

// FUSION --------------------

//integration.commit("V21.04.00.9XX et 9XX"); // tag

