// On instancie le graph dans le conteneur.
var sprint16 = creerGitGraph("graph-container-16");

// Branche MASTER
var master = creerBrancheMaster(sprint16);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var fonctionnalite1 = creerBrancheDeFonctionnalite("f_XXX");
//var tache1 = creerBrancheDeTache(fonctionnalite1, "XXX");



// MERGES --------------------



// FUSION --------------------
