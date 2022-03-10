//----------DOCUMENTATION----------
//var fonctionnaliteX = creerBrancheDeFonctionnalite("f_X");
//var tacheX = creerBrancheDeTache(fonctionnaliteX, "t_X");
//var ano_X = creerBrancheAnomalie(fonctionnaliteX, "a_X");
//var brancheSprint = creerBrancheDeSprint("twenty_rXX_sXX");
//var brancheMerge = creerBrancheDeMerge(integration, "merge_twenty_sX");
//creerMerge(fonctionnaliteX, tacheX);
//integration.commit("V22.01.00.9XX et 9XX"); // tag
//---------------------------------

// On instancie le graph dans le conteneur.
var sprint31 = creerGitGraph("graph-container-31");

// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint31);

var integration = master.branch("integration_22_1");
integration.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var fonctionnalite1 = creerBrancheDeFonctionnalite("f_rubrique_offre");
var tache22276 = creerBrancheDeTache(fonctionnalite1, "t_22276-liens-externes-au-lieu-de-iframe");
var tache21688 = creerBrancheDeTache(fonctionnalite1,"t_21688-images-dynamiques-niveau-1");
var tache22508 = creerBrancheDeTache(fonctionnalite1,"tache/22508-liens-prod-recette");
var ano_22164 = creerBrancheAnomalie(integration, "a_22164-accessibilite-offres-niveau-3-produit-intitule-des-boutons");
var ano_22162 = creerBrancheAnomalie(integration, "fix/22162-piegeClavier (+22163)");
var ano_21169 = creerBrancheAnomalie(integration, "fix/21169-offres-accessibilite-gestion-du-focus");
var ano_20423 = creerBrancheAnomalie(integration, "fix/20423_timout");
var ano_22847 = creerBrancheAnomalie(integration, "fix/22847-offres-affichage-niveau-1");
var ano_21805 = creerBrancheAnomalie(integration, "fix/21805-interstitiel-accessibilite (+21777)");
var ano_23068 = creerBrancheAnomalie(integration, "fix/23068-accueil-non-connecte-produits-assurances-bouton-aide");
var ano_21908 = creerBrancheAnomalie(integration, "fix/21908-bouton-contact-present-parcours-bloquant");
var tache23063 = creerBrancheDeTache(integration,"t_23063_migration_sdkta");
var tache22752 = creerBrancheDeFonctionnalite("feat/22752_simapp_contact");
var ano_22864 = creerBrancheAnomalie(integration, "fix/22864-offres-barre-de-recherche");
var ano_23206 = creerBrancheAnomalie(integration, "fix/23206-absence-bouton-contacts-header (+23199)");
var ano_23299 = creerBrancheAnomalie(integration, "fix/23299-offres-ios-mauvais-affichage-barre-de-recherche");
var ano_23315 = creerBrancheAnomalie(integration, "fix/23315-insterstitiel-ios-croix-non-cliquable");
var ano_23323 = creerBrancheAnomalie(integration, "fix/23323-la-deconnexion-met-en-arriere-plan-l-application");
var ano_22276 = creerBrancheAnomalie(integration, "fix/22276-lien-credit-renouvelable-externe-au-lieu-iframe");
var ano_23363 = creerBrancheAnomalie(integration, "fix/23363-top-pret-expresse-asynchrone");
var tache_23197 = creerBrancheDeTache(integration, "feat/23197_Boite_outils_tests");
var tache_21005 = creerBrancheDeTache(integration, "t_21005(poc sam)");
var fonctionnaliteTag = creerBrancheDeFonctionnalite("feat/tags");
var tache22887 = creerBrancheDeTache(fonctionnaliteTag, "tache/22887-modification-js");
var ano_23273 = creerBrancheAnomalie(integration, "fix/a_23273_annulation_virement");


// MERGES --------------------
creerMerge(integration, ano_22164);
creerMerge(fonctionnalite1, tache22276);
creerMerge(integration, ano_22162);
creerMerge(integration, ano_21169);
creerMerge(integration, ano_20423);
integration.commit("V22.01.00.920 et 921"); // tag
creerMerge(integration, ano_22847);
creerMerge(integration, ano_21908);
creerMerge(integration, tache23063);
integration.commit("V22.01.00.924 et 925"); // tag
creerMerge(integration, fonctionnalite1);
creerMerge(integration, ano_23068);
creerMerge(integration, ano_21805);
integration.commit("V22.01.00.928 et 929"); // tag
creerMerge(integration, ano_23206);
creerMerge(integration, ano_23323);
creerMerge(integration, ano_23299);
creerMerge(integration, ano_22276);
creerMerge(integration, ano_23315);
creerMerge(integration, ano_23363);
creerMerge(integration, tache22752);
creerMerge(integration, ano_23273);
creerMerge(integration, ano_22864);


// FUSION --------------------
