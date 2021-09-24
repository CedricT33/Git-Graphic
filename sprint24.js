// On instancie le graph dans le conteneur.
var sprint24 = creerGitGraph("graph-container-24");

// Branche MASTER
var master = creerBrancheMaster(sprint24);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_formulaire_contestations_monetiques");
var tache8999 = creerBrancheDeTache(integration, "t_8999_contestation_operation_carte");
var tache8979 = creerBrancheDeTache(integration, "t_8979_parcours_opposition_carte");
var anomalie5526 = creerBrancheAnomalie(integration, "a_5526_modification_tags");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_spay");
var tache1150 = creerBrancheDeTache(fonctionnalite2, "t_1150_spay_nouveaux_point_entrees");
var tache14533 = creerBrancheDeTache(integration, "t-14533-spay-debut-de-parcours-app");
var tache12584 = creerBrancheDeTache(integration, "t_12584_cleanCodeCompte");

// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r04_s01");

// MERGES --------------------
creerMerge(fonctionnalite1, tache8999);
creerMerge(integration, anomalie5526);
creerMerge(fonctionnalite1, tache8979);
creerMerge(fonctionnalite1, brancheSprint);






//integration.commit("V21.04.00.900 et 901"); // tag
