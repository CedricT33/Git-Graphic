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
var sprint47 = creerGitGraph("graph-container-47");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint47);

var integration = master.branch("master (=23.1)");
integration.commit("start");

//Branche de fusion

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteWIZBII = creerBrancheDeFonctionnalite("feat/twenty/wizbii");
var tache32803 = creerBrancheDeTache(fonctionnaliteWIZBII, "task/32803");

var fonctionnalite31470 = creerBrancheDeFonctionnalite("feat/twenty/Q4Q-31470");

var fonctionnaliteXPAY = creerBrancheDeFonctionnalite("feat/twenty/xpay");
var tache28868 = creerBrancheDeTache(fonctionnaliteXPAY, "task/28868-xpay-harmonisation");

var fonctionnaliteCOOKIES = creerBrancheDeFonctionnalite("feat/cookies");
var tache30198 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/30198-enabler-focus-cookies");
var tache32770 = creerBrancheDeTache(fonctionnaliteCOOKIES, "task/32770-cookies-js-11.02");

var fonctionnaliteAccesRapide = creerBrancheDeFonctionnalite("feat/accesRapides");

var fonctionnaliteInfosTechnique = creerBrancheDeFonctionnalite("feat/infos_techniques");
var tache29787 = creerBrancheDeTache(fonctionnaliteInfosTechnique, "task/29787_ajout_version_sdkta");

var fonctionnaliteDashboard = creerBrancheDeFonctionnalite("feat/twenty/dashboardASV");

var fonctionnalite31470 = creerBrancheDeFonctionnalite("feat/twenty/Q4Q-31470");

var ano32784 = creerBrancheAnomalie(master, " fix/32784_erreur_fraud_manager");
var ano32736 = creerBrancheAnomalie(master, " fix/32736-gerer-absence-du-nom-empreite");
var ano30079 = creerBrancheAnomalie(master, " Fix/30079-accessibilite-cartes-boutons");
var ano32722 = creerBrancheAnomalie(master, " fix/32722_vignette_mes_comptes");
var ano33137 = creerBrancheAnomalie(master, " fix/33137");
var ano32823 = creerBrancheAnomalie(master, " fix/32823");
var brancheReleaseQ4Q = creerBrancheDeSprint("DEV/23_1");
var brancheReleaseQ4Q23_2 = creerBrancheDeSprint("DEV/23_2");
// MERGES --------------------
creerMerge(brancheReleaseQ4Q, ano32784);
creerMerge(fonctionnaliteWIZBII, tache32803);
creerMerge(brancheReleaseQ4Q, fonctionnaliteWIZBII);
creerMerge(brancheReleaseQ4Q, fonctionnalite31470);
creerMerge(brancheReleaseQ4Q, ano32722);
creerMerge(brancheReleaseQ4Q, fonctionnaliteAccesRapide);
creerMerge(brancheReleaseQ4Q, fonctionnaliteInfosTechnique);
creerMerge(fonctionnaliteInfosTechnique, tache29787);
creerMerge(brancheReleaseQ4Q23_2, ano32823);
creerMerge(brancheReleaseQ4Q, ano33137);

// FUUUUUUUSION -------------------





//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint47b = creerGitGraph("graph-container-47b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint47b);
masterQH7.commit("start");

var featFraudManager = creerBrancheDeTache(masterQH7, "feat/twenty/Q4Q-29158");




// MERGES --------------------
