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
var sprint38 = creerGitGraph("graph-container-38");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint38);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteAPAY = creerBrancheDeFonctionnalite("feat/applepay");
var tache25710 = creerBrancheDeTache(fonctionnaliteAPAY, "task/25710_choix_de_carte");
var tacheCookies = creerBrancheDeTache(integration, "task/nouveau_fichier_js_cookies");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache27099 = creerBrancheDeTache(fonctionnaliteSAM, "task/integration-contralia-en-app (27099)");
var tache27174 = creerBrancheDeTache(fonctionnaliteSAM, "task/27174_ecran_fin_parours (27174)");
var tache27034 = creerBrancheDeTache(fonctionnaliteSAM, "task/27034_message_erreur_navigation");
var fonctionnalite27571 = creerBrancheDeFonctionnalite("feat/27571_maj_version_automatique");
var fonctionnaliteSAM2 = creerBrancheDeFonctionnalite("feat/SAM2");


// MERGES --------------------
creerMerge(fonctionnaliteAPAY, tache25710);


// MERGE DEMO ------------------------



// FUSION --------------------

