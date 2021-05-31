// On instancie le graph dans le conteneur.
var sprint19 = creerGitGraph("graph-container-19");

// Branche MASTER
var master = creerBrancheMaster(sprint19);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
//var tache1 = creerBrancheDeTache(fonctionnalite1, "t_XXXX");
var anomalie10852 = creerBrancheAnomalie(integration, "a_10852_parcours_modif_mpin");
var anomalie9849 = creerBrancheAnomalie(integration, "a_9849_scroll-iFrame");
var anomalie11085 = creerBrancheAnomalie(integration, "a_11085");
var anomalie10870 = creerBrancheAnomalie(integration, "a_10870");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var anomalie9123 = creerBrancheAnomalie(fonctionnalite1, "a_9123-notif-AMM-back-faceID");
var anomalie9132 = creerBrancheAnomalie(fonctionnalite1, "a_9132-notif-AMM-sans-code");



// MERGES --------------------
creerMerge(integration, anomalie10870);

