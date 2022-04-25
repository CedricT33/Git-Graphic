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
var tache24553 = creerBrancheDeTache(fonctionnalite2, "tache/24553_realisation_package_ASSE2 (ne pas merger)");
var fonctionnalite3 = creerBrancheDeFonctionnalite("feat/21517-poc-nsi");
var fonctionnalite4 = creerBrancheDeFonctionnalite("feat/22508-offres-bons-liens-prod-recette");
var fonctionnalite5 = creerBrancheDeFonctionnalite("feat/rubrique_offre");
var tache24033 = creerBrancheDeTache(fonctionnalite5, "tache/24033_amelioration_application_de_test");
var tache23116 = creerBrancheDeTache(fonctionnalite5, "tache/23116_assurances_et_prevoyance_ameliorations");
var tache21666 = creerBrancheDeTache(fonctionnalite5, "feat/21666_offre_flux_v2");
var fonctionnalite7 = creerBrancheDeFonctionnalite("poc_apple_pay (ne pas merger)");



// MERGES --------------------
creerMerge(fonctionnalite5, tache24033);
creerMerge(fonctionnalite2, tache17910);
creerMerge(fonctionnalite2, tache17888);
creerMerge(fonctionnalite5, tache23116);
creerMerge(fonctionnalite5, tache21666);




// FUSION --------------------
