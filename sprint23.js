// On instancie le graph dans le conteneur.
var sprint23 = creerGitGraph("graph-container-23");

// Branche MASTER
var master = creerBrancheMaster(sprint23);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_refonte_nav");
var tache1 = creerBrancheDeTache(fonctionnalite1, "f_lwei_fusion_refonte_nav");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_9910_adaptation_purge");
var anomalie14429 = creerBrancheAnomalie(fonctionnalite1, "a_14429-tags-refonte-nav");
var anomalie13679 = creerBrancheAnomalie(integration, "a_13679-loader-infini-op-vlider-touch-id");
var tache3 = creerBrancheDeTache(integration, "t_14319_package_pour_IARD (ne pas fusionner)");
var anomalie12604 = creerBrancheAnomalie(integration, "a_12604-tags-rationnalisation-stripes-certicode_plus");
var anomalie14072 = creerBrancheAnomalie(integration, "a_14072-apparition-furtive-du-header");


// MERGES --------------------
creerMerge(fonctionnalite1, tache2);
creerMerge(integration, anomalie12604);
creerMerge(f_refonte_nav, tache2);
//integration.commit("V21.03.00.9xx et 9xx"); // tag
