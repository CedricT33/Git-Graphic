//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(brancheVersLaquelleOnMerge, brancheQuiVaDansLAutre);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint44 = creerGitGraph("graph-container-44");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint44);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteSAMEPARGNE = creerBrancheDeFonctionnalite("feat/sam_epargne");
var tache29898 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28297_sam_epargne_tags_post_message (+30737+29126)");

var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/sam");
var tache30602 = creerBrancheDeTache(fonctionnaliteSAM, "task/30602_eligibilite_contralia");

var fonctionnaliteCOOKIES = creerBrancheDeFonctionnalite("feat/cookies");
var tache29478 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/29478_cookies_valorisation");
var tache30198 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/30198-enabler-focus-cookies");
var tache30917 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/30917_valorisaion_cookies_suite");

var fonctionnaliteCASHBACK = creerBrancheDeFonctionnalite("feat/cashback");
var tache30697 = creerBrancheDeTache(fonctionnaliteCASHBACK, "task/30697_optimisation_QH7");

var fonctionnaliteAPPLEPAY = creerBrancheDeFonctionnalite("feat/applePay");
var tache30262 = creerBrancheDeTache(fonctionnaliteAPPLEPAY, "task/30262_applePay_cardState");

var fonctionnaliteLBPA = creerBrancheDeFonctionnalite("feat/LBPA");
var tache30222 = creerBrancheDeTache(integration, "task/30222_lbpa_debranchement_navigateur_finalisation");

var brancheSprint = creerBrancheDeSprint("twenty_r05_s02");


// MERGES --------------------
creerMerge(fonctionnaliteSAMEPARGNE, tache29898);
creerMerge(fonctionnaliteAPPLEPAY, tache30262);
creerMerge(fonctionnaliteCASHBACK, tache30697);
creerMerge(fonctionnaliteSAM, tache30602);
creerMerge(brancheSprint, tache30222);
creerMerge(brancheSprint, fonctionnaliteSAMEPARGNE);
creerMerge(brancheSprint, fonctionnaliteCASHBACK);
creerMerge(brancheSprint, fonctionnaliteAPPLEPAY);
creerMerge(brancheSprint, fonctionnaliteSAM);
creerMerge(tache30198, fonctionnaliteSAMEPARGNE);
creerMerge(fonctionnaliteLBPA, tache30222);




//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint44b = creerGitGraph("graph-container-44b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint44b);
masterQH7.commit("start");

var tache30602 = creerBrancheDeTache(masterQH7, "task/30602_eligibilite_pph_contralia");

var tache30935 = creerBrancheDeTache(masterQH7, "task/30935_SB519");

var tache30697 = creerBrancheDeTache(masterQH7, "task/30697_optimisation_cashback");

var support231 = creerBrancheDeTache(masterQH7, "support/23.01");

var tache27259 = creerBrancheDeTache(masterQH7, "task/27259-Adherant-Clo");

var tache27261 = creerBrancheDeTache(masterQH7, "task/27261_debranchement_plebicom");

var tache27259merge = creerBrancheDeTache(masterQH7, "task/27261-27259_merge_cashback");


// MERGES --------------------
creerMerge(masterQH7, tache30602);
creerMerge(masterQH7, tache30935);
creerMerge(masterQH7, tache30697);
creerMerge(masterQH7, support231);
creerMerge(masterQH7, tache27259);
creerMerge(masterQH7, tache27261);
creerMerge(masterQH7, tache27259merge);



