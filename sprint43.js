//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint43 = creerGitGraph("graph-container-43");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint43);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var fonctionnaliteSIMAPP = creerBrancheDeFonctionnalite("feat/simapp");
var fonctionnaliteVadParapheur = creerBrancheDeFonctionnalite("feat/vad_parapheur");
var fonctionnaliteSAMAQ = creerBrancheDeFonctionnalite("feat/sam_aq");
var tache29898 = creerBrancheDeTache(fonctionnaliteCashback, "task/29898_samaq_tel_erreur");
var tache29872 = creerBrancheDeTache(fonctionnaliteCashback, "task/29872_cashback_point_entree_gerer");
var tache30240 = creerBrancheDeTache(fonctionnaliteCashback, "task/30240_cashback_carte_compte");
var tache30136 = creerBrancheDeTache(fonctionnaliteVadParapheur, "task/30136_tag_vad_parapheur_en_iframe");
var ano30487 = creerBrancheAnomalie(master, " fix/30487_appel-doublon-full-ip");

var fonctionnaliteFusion = creerBrancheDeFonctionnalite("fusion_twenty_r05_s01");



var brancheSprint = creerBrancheDeSprint("twenty_r05_s01");

// MERGES --------------------
creerMerge(fonctionnaliteVadParapheur, tache30136);
creerMerge(fonctionnaliteCashback, tache29872);
creerMerge(tache30240, fonctionnaliteCashback);
creerMerge(fonctionnaliteCashback, tache30240);
creerMerge(integration, ano30487);
creerMerge(fonctionnaliteSAMAQ, tache29898);

creerMerge(brancheSprint, fonctionnaliteCashback);

creerMerge(fonctionnaliteFusion, fonctionnaliteCashback);
creerMerge(fonctionnaliteFusion, fonctionnaliteSIMAPP);
creerMerge(fonctionnaliteFusion, fonctionnaliteVadParapheur);
creerMerge(fonctionnaliteFusion, fonctionnaliteSAMAQ);

creerMerge(integration, fonctionnaliteFusion);

//-------------------------QH7---------------------------//
// On instancie le graph dans le conteneur.
var sprint43b = creerGitGraph("graph-container-43b");

// Branche MASTER
// On instancie le graph dans le conteneur.
var sprint43b = creerGitGraph("graph-container-43b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint43b);
masterQH7.commit("start");

var fonctionnaliteCashbackQH7 = creerBrancheDeTache(masterQH7, "feat/cashback");
var tache29872 = creerBrancheDeTache(fonctionnaliteCashbackQH7, "task/29872_modification_appel_eligibilite_clo");

var tache27171 = creerBrancheDeTache(masterQH7, "task/27171-lister-dossier");

var brancheSprint = creerBrancheDeTache(masterQH7, "twenty_r05_s01");


// MERGES --------------------
creerMerge(brancheSprint, tache27171);
creerMerge(fonctionnaliteCashbackQH7, tache29872);
creerMerge(brancheSprint, fonctionnaliteCashbackQH7);

creerMerge(masterQH7, brancheSprint);
