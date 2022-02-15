//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V21.04.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint30 = creerGitGraph("graph-container-30");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint30);

var integration = master.branch("integration_22_1");
integration.commit("start");

var brancheSprint = creerBrancheDeSprint("twenty_r01_s03");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache1 = creerBrancheDeTache(fonctionnalite1, "t_18935-rubrique-assurances-prevoyance");
var tache2 = creerBrancheDeTache(fonctionnalite1, "t_21090-amelioration-sb-et-wording-niveau-1");
var tache20333 = creerBrancheDeTache(fonctionnalite1, "t_20333-parcours-boquants-non-contact");
var tache18913 = creerBrancheDeTache(fonctionnalite1, "t_18913-niveau3-pretimmo-creditconso");
var tache19135 = creerBrancheDeTache(fonctionnalite1, "t_19135_pdm_offre");
var tache20968 = creerBrancheDeTache(fonctionnalite1, "t_20968_wording_picto");
var fonctionnalite2 = creerBrancheDeFonctionnalite("f_spay");
var tache21328 = creerBrancheDeTache(fonctionnalite2, "t_21328-spay-modification-du-wording");
var tache21240 = creerBrancheDeTache(fonctionnalite1, "t_21240 (anomalie)");
var fonctionnalite3 = creerBrancheDeFonctionnalite("f_aem");
var tache21330 = creerBrancheDeTache(fonctionnalite3,"t_21330-supprimer-parametres-url");
var tache20809 = creerBrancheDeTache(fonctionnalite1,"t_20809_integration_sb_sam_formule_de_compte");
var tache21688 = creerBrancheDeTache(fonctionnalite1,"t_21688-images-dynamiques-niveau-1");

// MERGES --------------------
creerMerge(fonctionnalite1, tache1);
var tache20733= creerBrancheDeTache(fonctionnalite1, "t_20733-bouchon-prod");
var ano_21435 = creerBrancheAnomalie(fonctionnalite1, "a_21435-cta-decouvrir-iframe-lbpa");
creerMerge(brancheSprint, fonctionnalite1);
creerMerge(fonctionnalite1, ano_21435);
var tache21360= creerBrancheDeTache(fonctionnalite1, "t_21360-rubrique-offres-sim-app");
var ano21383 = creerBrancheAnomalie(fonctionnalite1, "a_21383-offre-retour-niv-2");
creerMerge(fonctionnalite1, tache20968);
creerMerge(fonctionnalite1, tache19135);
creerMerge(fonctionnalite1, tache20733);
creerMerge(fonctionnalite1, tache20809);
creerMerge(fonctionnalite2, tache21328);
var tache17200 = creerBrancheDeTache(fonctionnalite2, "t_17200-sim-app-bouchons-apple-pay-samsung-pay");
creerMerge(fonctionnalite2, tache17200);
creerMerge(fonctionnalite1, tache21360);
creerMerge(fonctionnalite1, ano21383);
var tache21711 = creerBrancheDeTache(fonctionnalite1,"t_21711-rubrique-offres-effet-cta-niveau-1");
creerMerge(brancheSprint, fonctionnalite1);
var tache21812 = creerBrancheDeTache(fonctionnalite1, "t_21812-loader-iframe");
creerMerge(fonctionnalite1, tache18913);
creerMerge(fonctionnalite1, tache2);
creerMerge(fonctionnalite1, tache21240);
creerMerge(fonctionnalite1, tache21812);
creerMerge(fonctionnalite1, tache21711);
creerMerge(brancheSprint, fonctionnalite1);
var tache22039 = creerBrancheDeTache(fonctionnalite1, "t_22039-modification-wording-et-url");
var ano_21076 = creerBrancheAnomalie(fonctionnalite1, "a_21076-offres-accessibilite-menu-du-premier-niveau");
creerMerge(brancheSprint, fonctionnalite2);
creerMerge(fonctionnalite3, tache21330);
var fonctionnalite3bis =  creerBrancheDeTache(fonctionnalite3,"merge_f_aem");
creerMerge(brancheSprint, fonctionnalite3bis);
creerMerge(fonctionnalite1, tache20333);

// FUSION --------------------


