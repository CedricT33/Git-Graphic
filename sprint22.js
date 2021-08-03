// On instancie le graph dans le conteneur.
var sprint22 = creerGitGraph("graph-container-22");

// Branche MASTER
var master = creerBrancheMaster(sprint22);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var anomaliexxx = creerBrancheAnomalie(xxx, "a_xxx");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_7331-table-aem-hash");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_7224-migration-aem");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_refonte_nav");
var tache3 = creerBrancheDeTache(fonctionnalite2, "f_lwei_fusion_refonte_nav");
var tache5 = creerBrancheDeTache(fonctionnalite2, "t_13326_ajout_footer_carte");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_certicode_plus");
var tache4 = creerBrancheDeTache(fonctionnalite3, "t_12828_certicode_code_personnel_oublie");
var anomalie12335 = creerBrancheAnomalie(integration, "a_12335_notifs_21_3");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r03_s03");

// MERGES --------------------
//creerMerge(fonctionnalitex, tachex);
//integration.commit("V21.03.00.9xx et 9xx"); // tag
