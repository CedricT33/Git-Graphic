// On instancie le graph dans le conteneur.
var sprint20 = creerGitGraph("graph-container-20");

// Branche MASTER
var master = creerBrancheMaster(sprint20);

var integration = master.branch("integration_systemteam_r21_3");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var anomalie9174 = creerBrancheAnomalie(integration, "a_9174-lbpf-mauvais-affichage-credit-renouvelable");
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_migration_aem");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_7331-table-aem-hash");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_refonte_nav");
var tache3 = creerBrancheDeTache(fonctionnalite2, "t_9366-accueil-vignette-comptes-agregateur");
var tache4 = creerBrancheDeTache(fonctionnalite2, "t_12259_mise_a_jour_stripes");
var tache5 = creerBrancheDeTache(fonctionnalite2, "t_12238-ajout-de-wu (12236)");
var tache6 = creerBrancheDeTache(fonctionnalite2, "t_12893-changement-icone-parametres-raccourcis");
var tache7 = creerBrancheDeTache(fonctionnalite2, "t_8469_menu_cartes_footer");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r03_s01");

// MERGES --------------------
//creerMerge(integration, fonctionnaliteXXX);
//integration.commit("V21.03.00.XXX et XXX"); // tag

