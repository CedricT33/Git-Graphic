// On instancie le graph dans le conteneur.
var sprint19 = creerGitGraph("graph-container-19");

// Branche MASTER
var master = creerBrancheMaster(sprint19);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var anomalie10852 = creerBrancheAnomalie(integration, "a_10852_parcours_modif_mpin");
var anomalie9849 = creerBrancheAnomalie(integration, "a_9849_scroll-iFrame");
var anomalie11085 = creerBrancheAnomalie(integration, "a_11085");
var anomalie10870 = creerBrancheAnomalie(integration, "a_10870");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var anomalie9132 = creerBrancheAnomalie(fonctionnalite1, "a_9132-notif-AMM-sans-code");
var anomalie9123 = creerBrancheAnomalie(fonctionnalite1, "a_9123-notif-AMM-back-faceID");
var anomalie11852 = creerBrancheAnomalie(fonctionnalite1, "a_11852_split_template_notif");
var anomalie10938 = creerBrancheAnomalie(integration, "a_10938-url-cookie");
var anomalie11580 = creerBrancheAnomalie(integration, "a_11580-c+-enrolement");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache1 = creerBrancheDeTache(fonctionnalite2, "t_7331-table-aem-hash");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_notifs");
var tache2 = creerBrancheDeTache(fonctionnalite3, "t_9387-tag-pdm-ecran-notif-smartblette");
var anomalie11544 = creerBrancheAnomalie(integration, "a_11544-CSS-iframe-IARD");
var anomalie11558 = creerBrancheAnomalie(integration, "a_11558_maj_table_aem");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_refonte_nav");
var tache3 = creerBrancheDeTache(fonctionnalite4, "t_9561-refonte-nav-fusion-accueil-comptes");
var tache4 = creerBrancheDeTache(fonctionnalite4, "t_9366-accueil-vignette-comptes-agregateur");
var anomalie4648 = creerBrancheAnomalie(integration, "a_4648-splashscreen");
var anomalie11605 = creerBrancheAnomalie(integration, "a_11605");
var anomalie9849 = creerBrancheAnomalie(integration, "a_9849_scroll-iFrame");
var anomalie12296 = creerBrancheAnomalie(integration, "a-12296-lbpf-erreur-technique");
var anomalie9160 = creerBrancheAnomalie(integration, "a_9160-affichage-credit-renouvelable");
var anomalie9174 = creerBrancheAnomalie(integration, "a_9174-lbpf-mauvais-affichage-credit-renouvelable");
var anomalie11621 = creerBrancheAnomalie(integration, "a_11621_mdp_notif");
var anomalie12691 = creerBrancheAnomalie(integration, "a_12691");

// MERGES --------------------
creerMerge(integration, anomalie10870);
integration.commit("V21.02.00.912 et 913"); // tag
creerMerge(integration, anomalie10852);
integration.commit("V21.02.00.914 à 916"); // tag
creerMerge(integration, anomalie11085);
creerMerge(integration, anomalie9849);
creerMerge(fonctionnalite1, anomalie9132);
creerMerge(fonctionnalite1, anomalie9123);
creerMerge(integration, fonctionnalite1);
creerMerge(integration, anomalie10938);
creerMerge(integration, anomalie11580);
creerMerge(integration, anomalie11544);
creerMerge(integration, anomalie11558);
integration.commit("V21.02.00.918 et 919"); // tag
creerMerge(fonctionnalite1, anomalie11852);
creerMerge(fonctionnalite4, tache3);
creerMerge(fonctionnalite3, tache2);
creerMerge(integration, anomalie11605);
creerMerge(integration, anomalie4648);
creerMerge(integration, anomalie9160);
creerMerge(integration, fonctionnalite1);
creerMerge(integration, anomalie11621);
integration.commit("V21.02.00.920 et 921"); // tag
creerMerge(integration, fonctionnalite3);
creerMerge(integration, anomalie12296);
creerMerge(fonctionnalite1, anomalie12691);
creerMerge(integration, fonctionnalite1);
integration.commit("V21.02.00.922 à 925"); // tag


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

var releaseQH5Bis = creerBrancheDeMerge(releaseQH5, "release/08_41_00.xxx");
var integrationQH5Bis = creerBrancheDeMerge(releaseQH5Bis, "integration_08_41_00.xxx");
var tache11862 = creerBrancheDeTache(integrationQH5Bis, "t_11862-notifs-sensibles-suppression-controle-champs");
creerMerge(integrationQH5Bis, tache11862);
creerMerge(releaseQH5Bis, integrationQH5Bis);
releaseQH5Bis.commit("V08_41_00.001"); // tag

