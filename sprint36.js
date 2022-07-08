//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint36 = creerGitGraph("graph-container-36");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint36);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var tache24751 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24751_points_d_entree");
var tache24729 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24729-blossom-page-presentation"); 
var tache24704 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24704_consentement_client"); 
var fonctionnaliteApplepay = creerBrancheDeFonctionnalite("feat/applepay");
var tache24831 = creerBrancheDeTache(fonctionnaliteApplepay, "task/24831-controle-acces-service");
var tache25626 = creerBrancheDeTache(fonctionnaliteApplepay, "feat/25626_connexion_applePay");
var tache26292 = creerBrancheDeTache(fonctionnaliteApplepay, "task/26292_tests_apple_pay");
var tacheTestApplePay = creerBrancheDeTache(fonctionnaliteApplepay, " 25626+24831_ApplePay_Connexion_ControlesAcces");

var ano_26733 = creerBrancheAnomalie(integration, "fix/26733-popin-debranchement-externe-popin-wizibii");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache26454 = creerBrancheDeTache(fonctionnaliteSAM, "task/26454-sam-integration-post-message");
var enablerOffre = creerBrancheDeFonctionnalite("enabler/26223_offre_du_moment");
var enablerNSI2 = creerBrancheDeFonctionnalite("enabler/25287_poc_nsi_2");
var ano_26888 = creerBrancheAnomalie(integration, "fix/26888_offres_tags_pages-produits");
var tacheCookies = creerBrancheDeTache(integration, "task/nouveau_fichier_cookies_v5");
var tache26064 =  creerBrancheDeTache(integration, "task/26064_gestion_camera_Iframe");
var demo = creerBrancheDeSprint("twenty_r03_s01");




// MERGES --------------------
creerMerge(fonctionnaliteBlossom, tache24751);
creerMerge(fonctionnaliteBlossom, tache24729);
creerMerge(fonctionnaliteBlossom, tache24704);
creerMerge(integration, ano_26733);
creerMerge(fonctionnaliteSAM, tache26454);
creerMerge(fonctionnaliteApplepay, tache25626);
creerMerge(fonctionnaliteApplepay, tache24831);
creerMerge(integration, ano_26888);

// MERGE DEMO ------------------------
creerMerge(demo, fonctionnaliteApplepay);
creerMerge(demo, fonctionnaliteBlossom);


// FUSION --------------------
