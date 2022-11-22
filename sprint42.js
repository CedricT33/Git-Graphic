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
creerMerge(tach2726127259, tache27259);
creerMerge(tach2726127259, tache27261);

var fonctionnaliteNsi = creerBrancheDeFonctionnalite("feat/nsi");
var tache28598 = creerBrancheDeTache(fonctionnaliteNsi, "task/28598_postmessage_filtre");
creerMerge(fonctionnaliteNsi, tache28598);
creerMerge(integration, fonctionnaliteNsi);

var fonctionnaliteSam = creerBrancheDeFonctionnalite("feat/parcours_sam");
var tache28297 = creerBrancheDeTache(fonctionnaliteSam, "task/28297_tag_sam_epargne");

var fix29088 = creerBrancheAnomalie(integration, "fix/29088_wording_popin_xpay");
var fix29517 = creerBrancheAnomalie(integration, "fix/29517_jonctions_stomes");
var fix29861 = creerBrancheAnomalie(integration22_4, "fix/29861");
var fix29018 = creerBrancheAnomalie(integration22_4, "fix/29018");
var fix30008 = creerBrancheAnomalie(integration22_4, "fix/30008");

var tache29922 = creerBrancheDeTache(integration22_4, "task/29922");
creerMerge(integration22_4, tache29922);

var poc29478 = creerBrancheDeFonctionnalite("poc/29478_cookies-new-crm");
var tache29975 = creerBrancheDeTache(integration, "task/29972_simapp_xpay");
var tache29972 = creerBrancheDeTache(integration, "task/29972_simapp_samaq");
var fix29422 = creerBrancheAnomalie(integration, "fix/29422_parapheur_puces_syndication");

// MERGES --------------------

creerMerge(integration, fix29088);
creerMerge(integration, tache29975);
creerMerge(integration, tache29972);
creerMerge(integration22_4, fix29861);
creerMerge(integration22_4, fix29018);
creerMerge(integration22_4, fix30008);

//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint42b = creerGitGraph("graph-container-42b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint42b);
masterQH7.commit("start");

var tache27307 = creerBrancheDeTache(masterQH7, "task/27307_amelioration_maptest");
creerMerge(masterQH7, tache27307);
// MERGES --------------------
