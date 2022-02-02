//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V21.04.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint30 = creerGitGraph("graph-container-30");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint30);

var integration = master.branch("integration_22_1");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_18935-rubrique-assurances-prevoyance");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_21090-amelioration-sb-et-wording-niveau-1");
var tache20333 = creerBrancheDeTache(fonctionnalite1, "t_20333-parcours-boquants-non-contact");
var tache18913 = creerBrancheDeTache(fonctionnalite1, "t_18913-niveau3-pretimmo-creditconso");
var tache19135 = creerBrancheDeTache(fonctionnalite1, "t_19135_pdm_offre");
var tache20968 = creerBrancheDeTache(fonctionnalite1, "t_20968_wording_picto");
t_19135_pdm_offre
// MERGES --------------------
var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");
creerMerge(fonctionnalite1, tache1);
creerMerge(brancheSprint, fonctionnalite1);


// FUSION --------------------

