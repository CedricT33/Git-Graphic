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
var sprint42 = creerGitGraph("graph-container-42");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint42);


var integration22_4 = master.branch("support/22.4");
integration22_4.commit("start");

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var tache27259 = creerBrancheDeTache(fonctionnaliteCashback, "task/27259_Points-entree-eligibilite");
var tache27262 = creerBrancheDeTache(fonctionnaliteCashback, "task/27262_integration_AEM");
var tache27261 = creerBrancheDeTache(fonctionnaliteCashback, "task/27261_debranchement_plebicom");
var tach2726127259 = creerBrancheDeTache(fonctionnaliteCashback, "task/27261-27259_un_appel_cmp");
creerMerge(tache27259, tach2726127259);
creerMerge(tache27261, tach2726127259);

var fonctionnaliteSam = creerBrancheDeFonctionnalite("feat/parcours_sam");
var tache28297 = creerBrancheDeTache(fonctionnaliteSam, "task/28297_tag_sam_epargne");



// MERGES --------------------


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint42b = creerGitGraph("graph-container-42b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint42b);
masterQH7.commit("start");


// MERGES --------------------
