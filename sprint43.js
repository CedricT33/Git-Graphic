//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint43 = creerGitGraph("graph-container-43");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint43);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var fonctionnaliteSIMAPP = creerBrancheDeFonctionnalite("feat/simapp");
var tache29872 = creerBrancheDeTache(fonctionnaliteCashback, "task/29872_cashback_point_entree_gerer");
var tache30240 = creerBrancheDeTache(fonctionnaliteCashback, "task/30240_cashback_carte_compte");

var ano30487 = creerBrancheAnomalie(master, " fix/30487_appel-doublon-full-ip");


var brancheSprint = creerBrancheDeSprint("twenty_r05_s01");

// MERGES --------------------
creerMerge(fonctionnaliteCashback, tache29872);
creerMerge(tache30240, fonctionnaliteCashback);
creerMerge(fonctionnaliteCashback, tache30240);
creerMerge(integration, ano30487);



//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint43b = creerGitGraph("graph-container-43b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint43b);
masterQH7.commit("start");

var fonctionnaliteCashbackQH7 = creerBrancheDeTache(masterQH7, "feat/cashback");
var tache29872QH7 = creerBrancheDeTache(fonctionnaliteCashbackQH7, "task/29872_modification_appel_eligibilite_clo");

// MERGES --------------------
creerMerge(fonctionnaliteCashbackQH7, tache29872QH7);
