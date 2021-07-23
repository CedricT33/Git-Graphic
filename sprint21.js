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
var tache3 = creerBrancheDeTache(fonctionnalite2, "t_13104_suppression_polling");
var tache5 = creerBrancheDeTache(fonctionnalite2, "t_10000_integration_personnalisation");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_certicode_plus");
var tache2 = creerBrancheDeTache(fonctionnalite3, "t_11965-mise-en-avant-operations-certicode-plus");
var tache4 = creerBrancheDeTache(integration, "t_7224-migration-aem");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r03_s02");

// MERGES --------------------
creerMerge(fonctionnalite2, tache3);
creerMerge(brancheSprint, fonctionnalite2);
//integration.commit("V21.03.00.xxx et xxx"); // tag
