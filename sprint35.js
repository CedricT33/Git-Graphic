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
var ano_24651 = creerBrancheAnomalie(integration, "fix/24651 (message err fullIP)");
var fonctionnaliteBlossom = creerBrancheDeFonctionnalite("feat/blossom");
var tache25912 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24751_points_d_entree");
var tache24704 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24704_consentement_client");
var ano_25900 = creerBrancheAnomalie(integration, "fix/25900_Absence_NumCompte_Dashboard");
var ano_25633 = creerBrancheAnomalie(integration, "fix/25633_Erreur_Wording");
var ano_25627 = creerBrancheAnomalie(integration, "fix/25627_Popin_Debranchement");
var ano_25907 = creerBrancheAnomalie(integration, "fix/25907 (montant fullIP)");
var ano_25804 = creerBrancheAnomalie(integration, "fix/25804_popin_wizbiiDash");
var ano_25981 = creerBrancheAnomalie(integration, "fix/25981_loader_infini_blocage_carte");
var ano_25914 = creerBrancheAnomalie(integration, "fix/25914 (ass deces)");
var ano_25973 = creerBrancheAnomalie(integration, "fix/25973-affichage-cvs-fingerprint");
var ano_23881 = creerBrancheAnomalie(integration, "fix/23881-offres-anomalie-tags");
var ano_25692 = creerBrancheAnomalie(integration, "fix/25692_PermanentSansT");
var ano_25964 = creerBrancheAnomalie(integration, "fix/25964 (chevron retour cartes)");
var ano_23789 = creerBrancheAnomalie(integration, "fix/23789_access_fullip_detail_montant");
var ano_26093 = creerBrancheAnomalie(integration, "fix/26093-loader-carre");
var ano_26042 = creerBrancheAnomalie(integration, "fix/26042_virements_decimale");
var ano_26036 = creerBrancheAnomalie(integration, "fix/26036_Croix_de_fermeture");
var ano_26095 = creerBrancheAnomalie(integration, "fix/26095 (loader non centré)");
var ano_26164 = creerBrancheAnomalie(integration, "fix/26164 (err 500 cartes)");
var tache24729 = creerBrancheDeTache(fonctionnaliteBlossom, "task/24729-blossom-page-presentation");

// MERGES --------------------
creerMerge(fonctionnaliteCookies, ano_25703);
creerMerge(fonctionnaliteCookies, ano_25697);
creerMerge(integration, ano_24651);
creerMerge(integration, ano_25900);
creerMerge(integration, ano_25633);
creerMerge(integration, ano_25627);
creerMerge(integration, ano_25907);
creerMerge(integration, ano_25804);
integration.commit("V22.02.00.908 et 909"); // tag
creerMerge(integration, ano_25981);
creerMerge(integration, ano_25914);
creerMerge(integration, ano_25973);
creerMerge(integration, ano_23881);
creerMerge(integration, ano_25692);
creerMerge(integration, ano_25964);
creerMerge(integration, ano_26093);
creerMerge(integration, ano_26042);
creerMerge(integration, ano_26036);
creerMerge(fonctionnaliteBlossom, tache24729);



//-------------------------QH7---------------------------//

// On instancie le graph dans le conteneur.
var sprint35b = creerGitGraph("graph-container-35b");

// Branche MASTER
var masterQH7 = creerBrancheMasterQH7(sprint35b);
masterQH7.commit("start");

var tache24978 = creerBrancheDeMerge(masterQH7, "task/24978_banque_compagnon");

// MERGES --------------------
creerMerge(masterQH7, tache24978);
