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
var sprint31 = creerGitGraph("graph-container-31");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint31);

var integration = master.branch("integration_22_1");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache22276 = creerBrancheDeTache(fonctionnalite1, "t_22276-liens-externes-au-lieu-de-iframe");
var ano_22164 = creerBrancheAnomalie(integration, "a_22164-accessibilite-offres-niveau-3-produit-intitule-des-boutons");


// MERGES --------------------


// FUSION --------------------
