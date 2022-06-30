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
var sprint36 = creerGitGraph("graph-container-36");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint36);

var integration = master.branch("master (=22.3)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var tache24751 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24751_points_d_entree");
var tache24729 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24729-blossom-page-presentation"); 
var tache24704 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24704_consentement_client"); 
var fonctionnaliteApplepay = creerBrancheDeFonctionnalite("feat/applepay");
var tache24831 = creerBrancheDeTache(fonctionnaliteApplepay, "task/24831-controle-acces-service");
var ano_26733 = creerBrancheAnomalie(master, "fix/26733-popin-debranchement-externe-popin-wizibii");
var ano_26747 = creerBrancheAnomalie(master, "fix/26747-iOS-saisie-montant-decimal");
var fonctionnaliteSAM = creerBrancheDeFonctionnalite("feat/SAM");
var tache26454 = creerBrancheDeTache(fonctionnaliteSAM, "task/26454-sam-integration-post-message");



// MERGES --------------------
creerMerge(fonctionnaliteBlossom, tache24751);
creerMerge(fonctionnaliteBlossom, tache24729);
creerMerge(fonctionnaliteBlossom, tache24704);


// FUSION --------------------
