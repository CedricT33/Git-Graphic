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
var sprint40 = creerGitGraph("graph-container-40");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint40);

var integration = master.branch("master (=22.5)");
integration.commit("start");

var integration22_3 = master.branch("support/22.3");
integration22_3.commit("start");

var integration22_4 = master.branch("support/22.4");
integration22_4.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS

var fonctionnaliteNSI = creerBrancheDeFonctionnalite("feat/nsi");
var tache27799 = creerBrancheDeTache(fonctionnaliteNSI, "task/27799_recuperation_id_contrat");

var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var tache27259 = creerBrancheDeTache(fonctionnaliteCashback, "task/27259_Points-entree-eligibilite");

var fonctionnaliteParapheur = creerBrancheDeFonctionnalite("feat/parapheur");
var tache28719 = creerBrancheDeTache(fonctionnaliteParapheur, "task/28719_affichage_VDA_BEL_en_iframe");

var fonctionnaliteRubriqueOffres = creerBrancheDeFonctionnalite("feat/rubrique_offres");
var tache28719 = creerBrancheDeTache(fonctionnaliteRubriqueOffres, "task/28870-sam-ajout-types-conditions-affichages");


// MERGES --------------------


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint40b = creerGitGraph("graph-container-40b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint40b);
masterQH7.commit("start");


// MERGES --------------------
