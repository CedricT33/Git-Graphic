// On instancie le graph dans le conteneur.
var sprint26 = creerGitGraph("graph-container-26");

// Branche MASTER
var master = creerBrancheMaster(sprint26);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_s3");
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");

var tache15463 = creerBrancheAnomalie(integration, "t_15463_notifs_connexion_invite");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r04_s03");


// MERGES --------------------
//creerMerge(fonctionnaliteX, tacheX);


// FUSION --------------------

//integration.commit("V21.04.00.9XX et 9XX"); // tag


//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
//var sprint26b = creerGitGraph("graph-container-26b");

// Branche MASTER
//var masterQH7 = creerBrancheMasterQH7(sprint26b);

//var releaseQH7 = masterQH7.branch("release/21_11_00.xxx");
//releaseQH7.commit("start");
//var integrationQH7 = creerBrancheDeMerge(releaseQH7, "integration_21_11.xxx");
//var tache11264QH7 = creerBrancheDeTache(integrationQH7, "f_11264_spay_eligiblite");

//creerMerge(integrationQH7, tache11264QH7);
