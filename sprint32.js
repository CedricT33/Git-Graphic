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
var sprint32 = creerGitGraph("graph-container-32");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint32);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("feat/assurance_deces");
var tache17910 = creerBrancheDeTache(fonctionnalite1, "tache/17910_detail_contrat_assurance_deces");
var tache17888 = creerBrancheDeTache(fonctionnalite1, "tache/17888-assurance-deces-ineligibilite");
var fonctionnalite2 = creerBrancheDeFonctionnalite("feat/certicode");
var tache25533 = creerBrancheDeTache(fonctionnalite2, "tache_23533_clavier_certicode");
var fonctionnalite3 = creerBrancheDeFonctionnalite("feat/21517-poc-nsi");
var ano_24198 = creerBrancheAnomalie(integration, "fix/24198-cartes-tags-manquants");
var fonctionnalite4 = creerBrancheDeFonctionnalite("feat/23410_mail_app_android");
var fonctionnalite5 = creerBrancheDeFonctionnalite("feat/235007_enabler_gyroscope");


// MERGES --------------------
creerMerge(integration, ano_24198);


// FUSION --------------------
