//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite(brancheOrigine, "f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint41 = creerGitGraph("graph-container-41");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint41);

var integration = master.branch("master (=22.5)");
integration.commit("start");

var integration22_4 = master.branch("support/22.4");
integration22_4.commit("start");

var integration22_3 = master.branch("support/22.3");
integration22_3.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteSAMEPARGNE = creerBrancheDeFonctionnalite("feat/sam_epargne");
var tache28084 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28084_image_toolbox_sam");

var tache28336 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28336-sam-epargne-postmessage");

var fonctionnaliteCashback = creerBrancheDeFonctionnalite("feat/cashback");
var tache27259 = creerBrancheDeTache(fonctionnaliteCashback, "task/27259_Points-entree-eligibilite");
var tache27262 = creerBrancheDeTache(fonctionnaliteCashback, "task/27262_integration_AEM");

var fonctionnaliteParapheur = creerBrancheDeFonctionnalite("feat/parapheur");
var tache27171 = creerBrancheDeTache(fonctionnaliteParapheur, "task/27171-point-entree-parapheur");
var tache28720 = creerBrancheDeTache(fonctionnaliteParapheur, "task/28720_debrachement_BEL_contralia");

var fonctionnaliteNouveauHeader = creerBrancheDeFonctionnalite("feat/amelioration-navigationservice-headerservice");
var ano_29289 = creerBrancheAnomalie(fonctionnaliteNouveauHeader, "fix/29289-header-retour-contralia-ko");

var ano_27944 = creerBrancheAnomalie(integration22_4, "fix/27944-sam-telechargement-documents-contralia-ios");

var fonctionnaliteSAMAQ = creerBrancheDeFonctionnalite(integration22_4, "feat/sam_aq");
var tache29431 = creerBrancheDeTache(fonctionnaliteSAMAQ, "task/29431");

var tache29596 = creerBrancheDeTache(integration, "task/29596-optimisation-bouton-back-android");

var fonctionnalitePersoCompte = creerBrancheDeFonctionnalite("feat/perso_compte");
var tache29021 = creerBrancheDeTache(fonctionnalitePersoCompte, "task/29021_filtre_renommage_compte");

var demo = creerBrancheDeSprint("twenty_r04_s02");
// 1er Merge --------------------

creerMerge(fonctionnaliteSAMEPARGNE, tache28084);
creerMerge(demo, fonctionnaliteSAMEPARGNE);

creerMerge(fonctionnaliteParapheur, tache27171);
creerMerge(fonctionnaliteNouveauHeader, ano_29289);

creerMerge(fonctionnaliteCashback, tache27262);

creerMerge(demo, fonctionnaliteNouveauHeader);
creerMerge(demo, fonctionnaliteParapheur);

creerMerge(demo, fonctionnaliteCashback);

// fin 1er Merge --------------------

var ano_29520 = creerBrancheAnomalie(fonctionnaliteNouveauHeader, "fix/29520_mauvais-routage-du-chevron-back");
creerMerge(fonctionnaliteNouveauHeader, ano_29520);
creerMerge(integration, fonctionnaliteNouveauHeader);

creerMerge(fonctionnaliteParapheur, integration);
creerMerge(fonctionnaliteSAMEPARGNE, integration);

var ano_28336 = creerBrancheAnomalie(fonctionnaliteSAMEPARGNE, "fix/28336-sam-epargne-postmessage");

var fonctionnalitePARTENAIRES = creerBrancheDeFonctionnalite("feat/integration_sam_epargne_parapheur");
creerMerge(fonctionnalitePARTENAIRES, fonctionnaliteParapheur);
creerMerge(fonctionnaliteSAMEPARGNE, ano_28336);
creerMerge(fonctionnalitePARTENAIRES, fonctionnaliteSAMEPARGNE);

creerMerge(demo, fonctionnalitePARTENAIRES);
creerMerge(integration22_4, ano_27944);

//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint41b = creerGitGraph("graph-container-41b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint41b);
masterQH7.commit("start");

var tache29431_QH7 = creerBrancheDeTache(masterQH7, "task/29431");
var tache27259_QH7 = creerBrancheDeTache(masterQH7, "task/27259-Adherant-Clo");

