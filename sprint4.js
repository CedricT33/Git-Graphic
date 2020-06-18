// On instancie le graph dans le conteneur.
var sprint4 = creerGitGraph("graph-container-4");

// Branche MASTER
var master = creerBrancheMaster(sprint4);

var integration = master.branch("integration_app_20_2");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_moteur_sensibilisation_relance");
var tache3 = creerBrancheDeTache(fonctionnalite1, "3577-suppression-pop-in-existante-sur-verrouillage-smartphone");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_evolution_notifications");
var tache2 = creerBrancheDeTache(fonctionnalite2, "2235_mise_a_jour_centre_notifications");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_inbenta");
var tache1 = creerBrancheDeTache(fonctionnalite3, "2805-integration-du-nouveau-sdk-inbenta");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_refacto_centre_notif_moteur_sensi");


// Branche SPRINT
//var brancheSprint = creerBrancheDeSprint("twenty_r01_s04");

// Branche MERGE
fonctionnalite4.merge(fonctionnalite1);
fonctionnalite4.merge(fonctionnalite2);
// MERGES --------------------


// FUSION aprés DEMO
