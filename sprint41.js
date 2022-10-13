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
var sprint41 = creerGitGraph("graph-container-41");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint41);

var integration = master.branch("master (=22.5)");
integration.commit("start");

var integration22_4 = master.branch("support/22.4");
integration22_4.commit("start");

var integration22_3 = master.branch("support/22.3");
integration22_3.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS

var fonctionnaliteSAMEPARGNE = creerBrancheDeFonctionnalite("feat/sam_epargne");
var tache28084 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28084_image_toolbox_sam");

var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var tache27259 = creerBrancheDeTache(fonctionnaliteCashback, "task/27259_Points-entree-eligibilite");
var tache27262 = creerBrancheDeTache(fonctionnaliteCashback, "task/27262_integration_AEM");

var fonctionnaliteParapheur = creerBrancheDeFonctionnalite("feat/parapheur");
var tache27171 = creerBrancheDeTache(fonctionnaliteParapheur, "task/27171-point-entree-parapheur");
var tache27171 = creerBrancheDeTache(fonctionnaliteParapheur, "task/28720_debrachement_BEL_contralia");

var ano_27944 = creerBrancheAnomalie(integration22_4, "fix/27944-sam-telechargement-documents-contralia-ios");

var demo = creerBrancheDeSprint("twenty_r04_s02");
// MERGES --------------------

creerMerge(fonctionnaliteSAMEPARGNE, tache28084);
creerMerge(demo, fonctionnaliteSAMEPARGNE);

//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint41b = creerGitGraph("graph-container-41b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint41b);
masterQH7.commit("start");
