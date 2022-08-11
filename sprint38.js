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
var tacheCookies = creerBrancheDeTache(integration, "task/nouveau_fichier_js_cookies");
var ano27601 = creerBrancheAnomalie(integration, "fix/27601_impossible_de_continuer_vers_le_parcours");
var fonctionnaliteAPAY = creerBrancheDeFonctionnalite("feat/applepay");
var tache25710 = creerBrancheDeTache(fonctionnaliteAPAY, "task/25710_choix_de_carte");
var tache26287 = creerBrancheDeTache(fonctionnaliteAPAY, "task/26287_Nouveau_parcours_applePay");
var ano27638 = creerBrancheAnomalie(fonctionnaliteAPAY, "fix/27638-bouton-choix-carte-non-conforme");
var fonctionnaliteSAM2 = creerBrancheDeFonctionnalite("feat/SAM2");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache27099 = creerBrancheDeTache(fonctionnaliteSAM, "task/integration-contralia-en-app (27099)");
var tache27174 = creerBrancheDeTache(fonctionnaliteSAM, "task/27174_ecran_fin_parours (27174)");
var tache27034 = creerBrancheDeTache(fonctionnaliteSAM, "task/27034_message_erreur_navigation");
var fonctionnalite27571 = creerBrancheDeFonctionnalite("feat/27571_maj_version_automatique");



// MERGES --------------------
creerMerge(fonctionnaliteAPAY, tache25710);
creerMerge(fonctionnaliteSAM2, tache27099);
creerMerge(fonctionnaliteSAM2, tache27034);
creerMerge(integration, ano27601);

// MERGE DEMO ------------------------



// FUSION --------------------

