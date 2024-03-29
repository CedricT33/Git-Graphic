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
var fonctionnalite5 = creerBrancheDeFonctionnalite("feat/wizbii_mail_non_renseigne_de_kyc (21097)");
var tache25597 = creerBrancheDeTache(fonctionnalite5, "tache_25597_email_non_renseigne");
var fonctionnalite6 = creerBrancheDeFonctionnalite("feat/cookies");
var tache21485 = creerBrancheDeTache(fonctionnalite6, "tache/page_optin_cookies (21499 + 21485)");
var anomalie25533 = creerBrancheAnomalie(integration, "fix/25533_syndication_ees_q45");
var fonctionnalite7 = creerBrancheDeFonctionnalite("feat/assurancevie");
var tache25912 = creerBrancheDeTache(fonctionnalite7, "tache/25912_solde_dashboard_assurancevie (25192)");
var anomalie25661 = creerBrancheAnomalie(integration, "fix/25661_offres_flux_debouchonne");
var anomaliesOffres = creerBrancheAnomalie(integration, "fix/anos-offres-25723-25668-25730");

var demo = creerBrancheDeSprint("twenty_r01_s03");

// MERGES --------------------
creerMerge(integration, ano_24523);
creerMerge(fonctionnalite1, tache22796);
creerMerge(integration, ano_24860);
creerMerge(fonctionnalite5, tache25597);
creerMerge(fonctionnalite7, tache25912);
creerMerge(fonctionnalite6, tache21485);
creerMerge(fonctionnalite4, tache25261);
creerMerge(integration, anomalie25533);
creerMerge(integration, anomalie25661);


creerMerge(demo, fonctionnalite4);
creerMerge(demo, fonctionnalite3);
creerMerge(demo, fonctionnalite5);
creerMerge(demo, fonctionnalite1);
creerMerge(demo, fonctionnalite6);
creerMerge(demo, fonctionnalite7);

// FUSION --------------------
creerMerge(integration, fonctionnalite1);
creerMerge(integration, fonctionnalite3);
creerMerge(integration, fonctionnalite4);
creerMerge(integration, fonctionnalite7);
creerMerge(integration, fonctionnalite5);
creerMerge(integration, anomaliesOffres);
integration.commit("V22.02.00.906 et 907"); // tag



//-------------------------QH5---------------------------//

// On instancie le graph dans le conteneur.
var sprint34b = creerGitGraph("graph-container-34b");

// Branche MASTER
var masterQH5 = creerBrancheMasterQH5(sprint34b);
masterQH5.commit("start");

var ts24917QH5 = creerBrancheDeMerge(masterQH5, "feat/24917-offre-prets-personnels");



//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint34c = creerGitGraph("graph-container-34c");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint34c);
masterQH7.commit("start");

var tache24978 = creerBrancheDeMerge(masterQH7, "task/24978_banque_compagnon (24978)");

// MERGES --------------------
creerMerge(masterQH7, tache24978);
