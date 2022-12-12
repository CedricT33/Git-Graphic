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
var sprint44 = creerGitGraph("graph-container-44");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint44);

var integration = master.branch("master (=22.5)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteSAMEPARGNE = creerBrancheDeFonctionnalite("feat/sam_epargne");
var tache29898 = creerBrancheDeTache(fonctionnaliteSAMEPARGNE, "task/28297_sam_epargne_tags_post_message");


// MERGES --------------------
