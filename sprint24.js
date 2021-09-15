// On instancie le graph dans le conteneur.
var sprint24 = creerGitGraph("graph-container-24");

// Branche MASTER
var master = creerBrancheMaster(sprint24);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var anomalieXXX = creerBrancheAnomalie(fonctionnaliteXXX, "a_XXX");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_formulaire_contestations_monetiques");
var tache8999 = creerBrancheDeTache(integration, "t_8999_contestation_operation_carte");



// MERGES --------------------
creerMerge(fonctionnalite1, tache8999);






//integration.commit("V21.04.00.900 et 901"); // tag
