// On instancie le graph dans le conteneur.
var sprint16 = creerGitGraph("graph-container-16");

// Branche MASTER
var master = creerBrancheMaster(sprint16);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_C+Amelioration-Enrolement");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_6917-certicode-plus-code-otp-sms");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_C+");
var tache2 = creerBrancheDeTache(fonctionnalite2, "t_7814-tag-popin-selfcare");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s01");


// MERGES --------------------



// FUSION APRES DEMO --------------------
