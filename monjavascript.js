var attaque = document.getElementById("attaque");
var defense = document.getElementById("defense");
var speciale = document.getElementById("speciale");
var pvPerso1 = document.getElementById("pv1");
var manaPerso1 = document.getElementById("mana1");
var pvPerso2 = document.getElementById("pv2");
var manaPerso2 = document.getElementById("mana2");
var pvPerso3 = document.getElementById("pv3");
var manaPerso3 = document.getElementById("mana3");
var pvPerso4 = document.getElementById("pv4");
var manaPerso4 = document.getElementById("mana4");
var bouton_attaque = document.getElementById("attaque");
var bouton_defend = document.getElementById("defense");
var bouton_special = document.getElementById("speciale");
var atk_heros_1 = document.getElementById("atk1");
var atk_heros_2 = document.getElementById("atk2");
var atk_heros_3 = document.getElementById("atk3");
var atk_heros_4 = document.getElementById("atk4");
var vie_monstre_1 = document.getElementById("pvMonstre1");
var vie_monstre_2 = document.getElementById("pvMonstre2");
var vie_monstre_3 = document.getElementById("pvMonstre3");
pvPerso1 = 150
pvPerso2 = 150
pvPerso3 = 150
pvPerso4 = 500
manaPerso1 = 100
manaPerso2 = 100
manaPerso3 = 100
manaPerso4 = 500
atk_heros_1 = 27;
atk_heros_2 = 27;
atk_heros_3 = 27;
atk_heros_4 = 100;
var perso_tour = 1;

function showStat1() {
	var element = document.getElementById('bulleMonstre1');
	
	if (element.style.display == 'none') {
		element.style.display = 'block';
	}else {
		element.style.display = 'none';
	}
}

function showStat2() {
	var element = document.getElementById('bulleMonstre2');
	
	if (element.style.display == 'none') {
		element.style.display = 'block';
	}else {
		element.style.display = 'none';
	}
}

function showStat3() {
	var element = document.getElementById('bulleMonstre3');
	
	if (element.style.display == 'none') {
		element.style.display = 'block';
	}else {
		element.style.display = 'none';
	}
}

/*bouton_attaque.onclick = function bouton_atk(){
	var choix_joueur = prompt("Quel ennemie voulez-vous attaquer ? 1 : Dragon de Feu - 2 : Roi des Mages - 3 : Dragon de Jade");
	if (choix_joueur == 1){
		vie_monstre_1 = vie_monstre_1 - atk_heros_1;
	if (choix_joueur == 2){
		vie_monstre_2 = vie_monstre_2 - atk_heros_2;
	if (choix_joueur == 3){
		vie_monstre_3 = vie_monstre_3 - atk_heros_3;
}