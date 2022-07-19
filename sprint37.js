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
var tacheCookies = creerBrancheDeTache(integration, "task/nouveau_fichier_js_cookies");
var tache25709 = creerBrancheDeTache(fonctionnaliteAPAY, "feat/25626_connexion_applePay");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache26293 = creerBrancheDeTache(fonctionnaliteSAM, "task/26293-sam-contralia");



var demo = creerBrancheDeSprint("twenty_r03_s02");
// MERGES --------------------



// MERGE DEMO ------------------------


// FUSION --------------------

