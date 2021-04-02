// On instancie le graph dans le conteneur.
var sprint16 = creerGitGraph("graph-container-16");

// Branche MASTER
var master = creerBrancheMaster(sprint16);

var integration = master.branch("integration_systemteam_r21_2");
integration.commit("start");

// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_C+Amelioration-Enrolement");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_6917-certicode-plus-code-otp-sms");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_C+");
var tache2 = creerBrancheDeTache(fonctionnalite2, "t_7814-tag-popin-selfcare");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_gestion_cookies");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_LBPF");
var tache3 = creerBrancheDeTache(fonctionnalite4, "t_7431-lbpf-evenement");
var tache4 = creerBrancheDeTache(fonctionnalite4, "t_6963-generer-token-lbpf (5296)");
var tache5 = creerBrancheDeTache(integration, "t_stripe_titre_mentions_legales_7872");
var fonctionnalite5 = creerBrancheDeFonctionnalite("f_IARD");
var fonctionnalite6 = creerBrancheDeFonctionnalite("f_smartblette");
var tache6 = creerBrancheDeTache(fonctionnalite6, "t_7470-smartblette-gestion-des-tokens");
var tache7 = creerBrancheDeTache(fonctionnalite6, "us_4330-smartblette-adaptation-du-moteur-de-sensi-relance");
var tache8 = creerBrancheDeTache(fonctionnalite6, "t_6671-adaptation-notifications-tablette (+8347)");
var fonctionnalite7 = creerBrancheDeFonctionnalite("f_simplification_notifs_21_2");
var fonctionnalite8 = creerBrancheDeFonctionnalite("f-mandat-prelevement");
var tache9 = creerBrancheDeTache(fonctionnalite8, "t-8023-prelevement-template-de-la-page-principale");


// Branche SPRINT
var brancheSprint = creerBrancheDeSprint("twenty_r01_s01 (21.2.0.215)");


// MERGES --------------------
creerMerge(fonctionnalite1, tache1);
creerMerge(fonctionnalite2, tache2);
creerMerge(fonctionnalite5, tache5);
creerMerge(fonctionnalite4, tache4);
creerMerge(fonctionnalite7, tache8);
creerMerge(fonctionnalite8, tache9);
creerMerge(fonctionnalite6, tache7);
creerMerge(fonctionnalite6, tache6);
creerMerge(fonctionnalite6, tache8);

brancheSprint.merge(fonctionnalite1);
brancheSprint.merge(fonctionnalite2);
brancheSprint.merge(fonctionnalite3);
brancheSprint.merge(fonctionnalite4);
brancheSprint.merge(fonctionnalite5);
brancheSprint.merge(fonctionnalite6);
brancheSprint.merge(fonctionnalite8);


// FUSION APRES DEMO --------------------
