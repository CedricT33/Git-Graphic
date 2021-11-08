// On instancie le graph dans le conteneur.
var sprint26 = creerGitGraph("graph-container-26");

// Branche MASTER
var master = creerBrancheMaster(sprint26);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_s3");
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");

var tache15463 = creerBrancheAnomalie(integration, "t_15463_notifs_connexion_invite");
var tacheTestAem = creerBrancheDeMerge(integration, "ajout_page_test_aem");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_ux_ui");
var tache16160 = creerBrancheDeTache(fonctionnalite1, "t_16160_total_des_avoirs");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_moteur_sensi_relance");
var tache16349 = creerBrancheDeTache(fonctionnalite2, "t_16349_ajout_popin_sensi_laf");
var tache16638 = creerBrancheDeTache(integration, "t_16638");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_13526_Apple_pay_uniformisation");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_spay (16931)");
var tache1708 = creerBrancheDeTache(fonctionnalite4, "t_1708_spay_modification");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache16679 = creerBrancheDeTache(fonctionnalite5, "t_16679-url-de-contribution-html");
var ano17002 = creerBrancheAnomalie(fonctionnalite5, "a_17002-hash-table-de-forcage");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r04_s03");


// MERGES --------------------
//creerMerge(fonctionnaliteX, tacheX);
creerMerge(fonctionnalite4, tache1708);
creerMerge(fonctionnalite2, tache16349);
creerMerge(brancheSprint, fonctionnalite4);
creerMerge(brancheSprint, fonctionnalite3);
creerMerge(brancheSprint, tache16638);
creerMerge(brancheSprint, fonctionnalite2);
creerMerge(fonctionnalite5, tache16679);
creerMerge(brancheSprint, fonctionnalite5);
creerMerge(fonctionnalite1, tache16160);
creerMerge(brancheSprint, fonctionnalite1);

// FUSION --------------------

//integration.commit("V21.04.00.9XX et 9XX"); // tag


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
//var sprint26b = creerGitGraph("graph-container-26b");

// Branche MASTER
//var masterQH7 = creerBrancheMasterQH7(sprint26b);

//var releaseQH7 = masterQH7.branch("release/21_11_00.xxx");
//releaseQH7.commit("start");
//var integrationQH7 = creerBrancheDeMerge(releaseQH7, "integration_21_11.xxx");
//var tache11264QH7 = creerBrancheDeTache(integrationQH7, "f_11264_spay_eligiblite");

//creerMerge(integrationQH7, tache11264QH7);
