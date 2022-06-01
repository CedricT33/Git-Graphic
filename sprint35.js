//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("feat/X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "task/X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "fix/X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.02.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint35 = creerGitGraph("graph-container-35");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint35);

var integration = master.branch("master (=22.2)");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnaliteCookies = creerBrancheDeFonctionnalite("feat/cookies");
var ano_25703 = creerBrancheAnomalie(fonctionnaliteCookies, "fix/25703_delai_affichage_AEM");
var ano_25697 = creerBrancheAnomalie(fonctionnaliteCookies, "fix/25697_service_indisponible_cookies");
var ano_24651 = creerBrancheAnomalie(integration, "fix/24651");
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var tache25912 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24751_points_d_entree");
var ano_25900 = creerBrancheAnomalie(integration, "fix/25900_Absence_NumCompte_Dashboard");
var ano_25633 = creerBrancheAnomalie(integration, "fix/25633_Erreur_Wording");
var ano_25627 = creerBrancheAnomalie(integration, "fix/25627_Popin_Debranchement");
var ano_25907 = creerBrancheAnomalie(integration, "fix/25907 (montant fullIP)");
var ano_25804 = creerBrancheAnomalie(integration, "fix/25804_popin_wizbiiDash");
var ano_25981 = creerBrancheAnomalie(integration, "fix/25981_loader_infini_blocage_carte");
var ano_25914 = creerBrancheAnomalie(integration, "fix/25914");


// MERGES --------------------
creerMerge(fonctionnaliteCookies, ano_25703);
creerMerge(fonctionnaliteCookies, ano_25697);
creerMerge(integration, ano_24651);
creerMerge(integration, ano_25900);
creerMerge(integration, ano_25633);
creerMerge(integration, ano_25627);
creerMerge(integration, ano_25907);
creerMerge(integration, ano_25804);
creerMerge(integration, ano_25914);
integration.commit("V22.02.00.908 et 909"); // tag


// FUSION --------------------
