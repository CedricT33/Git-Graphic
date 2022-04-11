//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.01.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint33 = creerGitGraph("graph-container-33");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint33);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("feat/cookies");
var tache21499 = creerBrancheDeTache(fonctionnalite1, "tache/js_cookies (21499)");
var tache21485 = creerBrancheDeTache(fonctionnalite1, "tache/page_optin_cookies (21485)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("feat/assurance_deces");
var tache17910 = creerBrancheDeTache(fonctionnalite2, "tache/17910_detail_contrat_assurance_deces");
var tache17888 = creerBrancheDeTache(fonctionnalite2, "tache/17888-assurance-deces-ineligibilite");
var fonctionnalite3 = creerBrancheDeFonctionnalite("feat/21517-poc-nsi");


// MERGES --------------------



// FUSION --------------------
