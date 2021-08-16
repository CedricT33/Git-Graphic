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
var tache6= creerBrancheDeTache(fonctionnalite2, "t_13558_retours_agregateur");
var anomalie13666 = creerBrancheAnomalie(fonctionnalite2, "a_13666_bouton_deconnexion");
var tache7= creerBrancheDeTache(fonctionnalite2, "t_9910_adaptation_purge");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_certicode_plus");
var tache4 = creerBrancheDeTache(fonctionnalite3, "t_12828_certicode_code_personnel_oublie");
var anomalie12335 = creerBrancheAnomalie(integration, "a_12335_notifs_21_3");
var anomalie13679 = creerBrancheAnomalie(integration, "a_13679-loader-infini-op-vlider-touch-id");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r03_s03");

// MERGES --------------------
//creerMerge(fonctionnalitex, tachex);
creerMerge(fonctionnalite3, tache4);
creerMerge(fonctionnalite2, tache5);
creerMerge(fonctionnalite2, tache6);
creerMerge(brancheSprint, fonctionnalite2);
creerMerge(brancheSprint, fonctionnalite3);
//integration.commit("V21.03.00.9xx et 9xx"); // tag

//-------------------------QH8---------------------------//


// On instancie le graph dans le conteneur.
var sprint22b = creerGitGraph("graph-container-22b");

// Branche MASTER
var masterQH8 = creerBrancheMasterQH8(sprint22b);

var releaseQH8 = masterQH8.branch("release/integration_0_3");
releaseQH8.commit("start");
var integrationQH8 = creerBrancheDeMerge(releaseQH8, "integration_0_3");

// Branches FONCTIONNALITE et TACHES
var tacheQH8_1 = creerBrancheDeTache(integrationQH8, "t_9910");

