// On instancie le graph dans le conteneur.
var sprint23 = creerGitGraph("graph-container-23");

// Branche MASTER
var master = creerBrancheMaster(sprint23);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var anomaliexxx = creerBrancheAnomalie(xxx, "a_xxx");
//var fonctionnalitexxx = creerBrancheDeFonctionnalite("f_xxx");
//var tachexxx = creerBrancheDeTache(fonctionnalitexxx, "t_xxx");


// MERGES --------------------
//creerMerge(fonctionnalitex, tachex);
//integration.commit("V21.03.00.9xx et 9xx"); // tag
