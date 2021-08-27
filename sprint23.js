// On instancie le graph dans le conteneur.
var sprint23 = creerGitGraph("graph-container-23");

// Branche MASTER
var master = creerBrancheMaster(sprint23);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_nav");
var tache1 = creerBrancheDeTache(fonctionnalite1, "f_lwei_fusion_refonte_nav (9869)");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_9910_adaptation_purge");
var anomalie14429 = creerBrancheAnomalie(fonctionnalite1, "a_14429-tags-refonte-nav");
var anomalie13679 = creerBrancheAnomalie(integration, "a_13679-loader-infini-op-vlider-touch-id");
var tache3 = creerBrancheDeTache(integration, "t_14319_package_pour_IARD (ne pas fusionner)");
var anomalie12604 = creerBrancheAnomalie(integration, "a_12604-tags-rationnalisation-stripes-certicode_plus");
var anomalie14072 = creerBrancheAnomalie(integration, "a_14072-apparition-furtive-du-header (+ 13012)");
var anomalie12335 = creerBrancheAnomalie(integration, "a_12335_notifs_21_3");
var anomalie14040 = creerBrancheAnomalie(integration, "a_14040-route-raccourci-profil");
var anomalie14419 = creerBrancheAnomalie(integration, "a_14419_split_notifs");
var anomalie14585 = creerBrancheAnomalie(integration, "a_14585-bulle-footer-donnees-perso");


// MERGES --------------------
creerMerge(fonctionnalite1, tache1);
creerMerge(fonctionnalite1, tache2);
creerMerge(fonctionnalite1, anomalie14429);
creerMerge(integration, fonctionnalite1);
creerMerge(integration, anomalie13679);
creerMerge(integration, anomalie12604);
creerMerge(integration, anomalie12335);
integration.commit("V21.03.00.906 et 907"); // tag
creerMerge(integration, anomalie14040);
creerMerge(integration, anomalie14419);




//-------------------------QH5---------------------------//


// On instancie le graph dans le conteneur.
var sprint23b = creerGitGraph("graph-container-23b");

// Branche MASTER
var masterQH5 = creerBrancheMasterQH5(sprint23b);

var releaseQH5 = masterQH5.branch("release/08_43_00.xxx");
releaseQH5.commit("start");
var integrationQH5 = creerBrancheDeMerge(releaseQH5, "integration_08_43_00.xxx");

// Branches FONCTIONNALITE et TACHES
var tache8721 = creerBrancheDeTache(integrationQH5, "t_8721_alerte_splunk_compte_contrat");


// MERGES --------------------
creerMerge(integrationQH5, tache8721);
creerMerge(releaseQH5, integrationQH5);
releaseQH5.commit("V08_43_00.000"); // tag
