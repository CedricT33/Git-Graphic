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
var sprint37 = creerGitGraph("graph-container-37");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint37);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var poc_apple_pay = creerBrancheDeTache(integration, "poc_apple_pay");
var fonctionnaliteAPAY = creerBrancheDeFonctionnalite("feat/applepay");
var tache26292 = creerBrancheDeTache(fonctionnaliteAPAY, "task/26292_tests_apple_pay");
var tache25709 = creerBrancheDeTache(fonctionnaliteAPAY, "task/25709_verification_titulaire_carte");
var tache25710 = creerBrancheDeTache(fonctionnaliteAPAY, "task/25710_choix_de_carte");
var tache25626 = creerBrancheDeTache(fonctionnaliteAPAY, "feat/25626_connexion_applePay");
var tacheCookies = creerBrancheDeTache(integration, "task/nouveau_fichier_js_cookies");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache26293 = creerBrancheDeTache(fonctionnaliteSAM, "task/26293-sam-implementation-postmessages");
var tache27099 = creerBrancheDeTache(fonctionnaliteSAM, "task/integration-contralia-en-app");
var ano27400 = creerBrancheAnomalie(fonctionnaliteSAM, "fix/27400-sam-popin-alert-null");
var tache26871 = creerBrancheDeTache(integration, "task/26871_SimAPP_Bouchon_RubriqueOffres");



var demo = creerBrancheDeSprint("twenty_r03_s02");
// MERGES --------------------
creerMerge(fonctionnaliteAPAY, tache25626);
creerMerge(fonctionnaliteAPAY, tache26292);
creerMerge(fonctionnaliteAPAY, tache25709);
creerMerge(fonctionnaliteSAM, tache26293);
creerMerge(fonctionnaliteSAM, ano27400);
// MERGE DEMO ------------------------


// FUSION --------------------
creerMerge(master, fonctionnaliteAPAY);
creerMerge(master, fonctionnaliteSAM);
creerMerge(master, tache26871);
