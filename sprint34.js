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
var sprint34 = creerGitGraph("graph-container-34");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint34);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("feat/rubrique_offre")
var tache22796 = creerBrancheDeTache(fonctionnalite1, "tache/22796-amelioration-visuels");
var ano_24523  = creerBrancheAnomalie(integration, "fix/24523_erreur_500_faceid");
var ano_24860  = creerBrancheAnomalie(integration, "fix/24860_loi_6902");
var fonctionnalite2 = creerBrancheDeFonctionnalite("feat/scoring-risk");
var tache21465 = creerBrancheDeTache(fonctionnalite2, "tache/21465-integration-sdk-ibm");
var fonctionnalite3 = creerBrancheDeFonctionnalite("feat/25319-infos-techniques");
var fonctionnalite4 = creerBrancheDeFonctionnalite("feat/assurance_deces");
var tache25261 = creerBrancheDeTache(fonctionnalite4, "tache/25261-patch-libelle");
var fonctionnalite5 = creerBrancheDeFonctionnalite("feat/wizbii_mail_non_renseigne_de_kyc");
var fonctionnalite6 = creerBrancheDeFonctionnalite("feat/cookies");
var tache21485 = creerBrancheDeTache(fonctionnalite6, "tache/page_optin_cookies (21499 + 21485)");


// MERGES --------------------
creerMerge(integration, ano_24523);
creerMerge(fonctionnalite1, tache22796);
// FUSION --------------------
