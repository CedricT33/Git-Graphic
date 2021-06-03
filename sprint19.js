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
var anomalie9132 = creerBrancheAnomalie(fonctionnalite1, "a_9132-notif-AMM-sans-code");
var anomalie9123 = creerBrancheAnomalie(fonctionnalite1, "a_9123-notif-AMM-back-faceID");
var anomalie10938 = creerBrancheAnomalie(integration, "a_10938-url-cookie");


// MERGES --------------------
creerMerge(integration, anomalie10870);
integration.commit("V21.02.00.912 et 913"); // tag
creerMerge(integration, anomalie10852);
integration.commit("V21.02.00.914 à 916"); // tag
creerMerge(fonctionnalite1, anomalie9132);
creerMerge(fonctionnalite1, anomalie9123);



//-------------------------QH5---------------------------//


// On instancie le graph dans le conteneur.
var sprint19b = creerGitGraph("graph-container-19b");

// Branche MASTER
var masterQH5 = creerBrancheMasterQH5(sprint19b);

var releaseQH5 = masterQH5.branch("release/08_40_00.xxx");
releaseQH5.commit("start");
var integrationQH5 = creerBrancheDeMerge(releaseQH5, "integration_08_40_00.xxx");

// Branches FONCTIONNALITE et TACHES
var tache11490 = creerBrancheDeTache(integrationQH5, "t_11490_modification_contrat_interface_cmp");


// MERGES --------------------
creerMerge(integrationQH5, tache11490);
creerMerge(releaseQH5, integrationQH5);
releaseQH5.commit("V08_40_00.006"); // tag


