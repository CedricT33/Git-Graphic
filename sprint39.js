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
var sprint39 = creerGitGraph("graph-container-39");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint39);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var ano_27330 = creerBrancheAnomalie(integration, "fix/27330_postmessages_manquants_iframe_lbpa");
var ano_27994 = creerBrancheAnomalie(integration, "fix/27994_header_sam_contralia");
var ano_28142 = creerBrancheAnomalie(integration, "fix/28142_certicode_bouton_annuler");
var ano_28115 = creerBrancheAnomalie(integration, "fix/28115_apay_controle_sb_ko");
var ano_27889 = creerBrancheAnomalie(integration, "fix/27889_accueil_non_connectee_accessibilite");


// MERGES --------------------
creerMerge(integration, ano_28142);
creerMerge(integration, ano_28115);
creerMerge(integration, ano_27889);
creerMerge(integration, ano_27994);
