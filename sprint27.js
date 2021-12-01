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
var sprint27 = creerGitGraph("graph-container-27");


// Branche MASTER & INTEGRATION
var master = creerBrancheMaster(sprint27);

var integration = master.branch("integration_systemteam_r21_4");
integration.commit("start");

var integration22 = master.branch("integration_systemteam_r22_1");
integration22.commit("start");


// Branches FONCTIONNALITE, TACHES ET ANOS
var ano17346 = creerBrancheAnomalie(integration, "a_17346_total_avoirs");
var ano16933 = creerBrancheAnomalie(integration, "a_16933-spay-saisie-faux-mpins");
var ano16771 = creerBrancheAnomalie(integration, "a_16771-spay-numeros-de-tel-ko");
var ano16896 = creerBrancheAnomalie(integration, "a_16896-spay-bouton-deconnexion");
var ano16903 = creerBrancheAnomalie(integration, "a_16903-spay-header-non-centre");
var ano16829 = creerBrancheAnomalie(integration, "a_16829-spay-non-expiration-session");
var ano17332 = creerBrancheAnomalie(integration, "a_17332-parcours-spay-ccs");
var ano17495 = creerBrancheAnomalie(integration, "a_17495");
var tache16374 = creerBrancheDeTache(integration, "t_16374-spay-clean-code-poc");
var ano17644 = creerBrancheAnomalie(integration, "a_17644-spay-time-out-5min");
var ano17604 = creerBrancheAnomalie(integration, "a_17604-xpay-numeros-de-tel-ko");
var ano17597 = creerBrancheAnomalie(integration, "a_17597");
var ano16521 = creerBrancheAnomalie(integration, "a_16521_modification_plafond_carte");
var ano18060 = creerBrancheAnomalie(integration, "a_18060");
var ano17539 = creerBrancheAnomalie(integration, "a_17539-virement-instantane-ko");
var ano18203 = creerBrancheAnomalie(integration, "a_18203_total_des_avoirs");
var ano17688 = creerBrancheAnomalie(integration, "a_17688");
var ano17954 = creerBrancheAnomalie(integration, "a_17954-tnr-virement-service-indisponible");
var ano18224 = creerBrancheAnomalie(integration, "a_18224_mise_en_avant_c+");
var ano18329 = creerBrancheAnomalie(integration, "a_18329_total_des_avoirs");
var ano17029 = creerBrancheAnomalie(integration, "a_17029-certicode-plus-multitap");
var ano17651 = creerBrancheAnomalie(integration, "a_17651");
var ano6010 = creerBrancheAnomalie(integration, "a_6010-apple-pay-bouton-call-ko");
var ano16528 = creerBrancheAnomalie(integration, "a_16528");
var ano18490 = creerBrancheAnomalie(integration, "a_18490-tnr-virement-virement-interne");
var ano18453 = creerBrancheAnomalie(integration, "a_18453_notifs_c+_mode_invite");
var ano18539 = creerBrancheAnomalie(integration, "a_18539");
var ano18754 = creerBrancheAnomalie(integration, "t_18754_asterisque_total_des_avoirs");


// MERGES --------------------
creerMerge(integration, ano17346);
creerMerge(integration, ano16933);
creerMerge(integration, ano16771);
creerMerge(integration, ano16896);
creerMerge(integration, ano16903);
creerMerge(integration, ano16829);
creerMerge(integration, ano17332);
creerMerge(integration, tache16374);
creerMerge(integration, ano17644);
creerMerge(integration, ano17604);
integration.commit("V21.04.00.920 et 921"); // tag
creerMerge(integration, ano17597);
creerMerge(integration, ano16521);
creerMerge(integration, ano18060);
creerMerge(integration, ano17539);
creerMerge(integration, ano17954);
creerMerge(integration, ano18203);
creerMerge(integration, ano17688);
creerMerge(integration, ano17029);
creerMerge(integration, ano17651);
creerMerge(integration, ano18224);
creerMerge(integration, ano18329);
creerMerge(integration, ano6010);
integration.commit("V21.04.00.924 et 925"); // tag
creerMerge(integration, ano16528);
creerMerge(integration, ano18490);
integration.commit("V21.04.00.926 et 927"); // tag
creerMerge(integration, ano18539);
creerMerge(integration, ano18754);
creerMerge(integration, ano18453);
