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
var ano_28241 = creerBrancheAnomalie(integration, "fix/28241-apay-controle-ancien-parcours");
var ano_28035 = creerBrancheAnomalie(integration, "fix/28035");
var ano_25694 = creerBrancheAnomalie(integration, "fix/25694");
var ano_27967 = creerBrancheAnomalie(integration, "fix/27967");
var ano_27447 = creerBrancheAnomalie(integration, "fix/27447-apay-deconnexion-ko");
var ano_28380 = creerBrancheAnomalie(integration, "fix/28380-apay-profil");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache28354 = creerBrancheDeTache(fonctionnaliteSAM, "task/28354-sam-modif-erreur-tel");

// MERGES --------------------
creerMerge(integration, ano_28142);
creerMerge(integration, ano_28115);
creerMerge(integration, ano_27889);
creerMerge(integration, ano_27994);
creerMerge(integration, ano_28241);
creerMerge(integration, ano_28035);
creerMerge(integration, ano_25694);
creerMerge(integration, ano_27447);
creerMerge(integration, ano_28380);


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint39b = creerGitGraph("graph-container-39b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint39b);
masterQH7.commit("start");

var tache28212 = creerBrancheDeMerge(masterQH7, "fix/28212");

// MERGES --------------------
creerMerge(masterQH7, tache24978);