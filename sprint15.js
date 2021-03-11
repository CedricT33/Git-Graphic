// On instancie le graph dans le conteneur.
var sprint15 = creerGitGraph("graph-container-15");

// Branche MASTER
var master = creerBrancheMaster(sprint15);

var integration = master.branch("integration_systemteam_r21_1");
integration.commit("start");

// Branches FONCTIONNALITE et TACHES
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_simplification_notifs");
var ano6782 = creerBrancheAnomalie(fonctionnalite1, "a_6782 (Simplification Notifs)");
var ano6786 = creerBrancheAnomalie(fonctionnalite1, "a_6786 (Simplification Notifs)");
var ano6786_6782 = creerBrancheAnomalie(fonctionnalite1, "a_6786_6782 (Simplification Notifs)");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_tu_chrome_headless");
var ano7290 = creerBrancheAnomalie(integration, "a_7290-Bic_repetition");
var ano7294 = creerBrancheAnomalie(integration, "a_7294-Stripes_inactives_agregateur");
var ano7140 = creerBrancheAnomalie(integration, "a_7140_ouverture_notification");
var ano7108 = creerBrancheAnomalie(integration, "a_7108_service_indisponible_dashboard");
var ano7503 = creerBrancheAnomalie(integration, "a_7503_popin_cvs");
var ano7556 = creerBrancheAnomalie(integration, "a_7556-perso-carte-chevron-back-ko");
var ano7534 = creerBrancheAnomalie(integration, "a_7534_popin_indispo_dsp2");
var ano7699 = creerBrancheAnomalie(integration, "a_7699_af_plus_90_dashboard");
var ano7918=creerBrancheAnomalie(integration, "a_7918_dashboard_af_plus_90j");
var ano7847=creerBrancheAnomalie(integration, "a_7847_err_500");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_gestion_cookies");
var tache1 = creerBrancheDeTache(fonctionnalite3, "t_7212-tags-cookies-et-stripe-certicode-plus-accueil-non-connecte");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_IARD");
var tache2 = creerBrancheDeTache(fonctionnalite4, "t_6007-whitelisting");
var fonctionnalite4 = creerBrancheDeFonctionnalite("f_LBPF");
var tache2 = creerBrancheDeTache(fonctionnalite4, "t_7431-lbpf-evenement");



// MERGES --------------------
creerMerge(integration, ano7140);
creerMerge(integration, ano7290);
integration.commit("V21.01.00.912 et 913"); // tag
creerMerge(integration, ano7503);
creerMerge(integration, ano7556);
integration.commit("V21.01.00.914 et 915"); // tag
creerMerge(integration, ano7534);
creerMerge(integration, ano7699);
creerMerge(integration, ano7847);
creerMerge(integration, ano7108);
integration.commit("V21.01.00.916 et 917"); // tag
creerMerge(ano6786_6782, ano6786);
creerMerge(ano6786_6782, ano6782);




//-------------------------QH7---------------------------//


// On instancie le graph dans le conteneur.
var sprint15b = creerGitGraph("graph-container-15b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint15b);

var integrationQH7 = masterQH7.branch("integration_0_10");
integrationQH7.commit("start");

// Branches FONCTIONNALITE et TACHES
var tache6963 = creerBrancheDeTache(integrationQH7, "t6963-modification-gcp-et-service-token-lbpf");


// MERGES --------------------
creerMerge(integrationQH7, tache6963);

