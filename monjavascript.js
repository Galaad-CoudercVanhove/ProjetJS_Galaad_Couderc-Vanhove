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
var monstre_1 = document.getElementById("Monstre1");
var monstre_2 = document.getElementById("Monstre2");
var monstre_3 = document.getElementById("Monstre3");
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
var info = document.getElementById("message_attaque")

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

function attaqueAleatoire(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function victoire() {
	if (vie_monstre_2 <= 0){
		monstre_1.style.dsplay == 'none';
	}
}

var attaque_monstre1 = function(){
	var atk_monstre_1 = entierAleatoire(1,4);
	if (attaque_monstre1 == 1){
		pvPerso1 = pvPerso1 - 28;
	}
	if (attaque_monstre1 == 2){
		pvPerso2 = pvPerso2 - 28;
	}
	if (attaque_monstre1 == 3){
		pvPerso3 = pvPerso3 - 28;
	}
	if (attaque_monstre1 == 4){
		pvPerso4 = pvPerso4 - 28;
	}
}

var attaque_monstre2 = function(){
	var atk_monstre_2 = entierAleatoire(1,4);
	if (attaque_monstre2 == 1){
		pvPerso1 = pvPerso1 - 28;
	}
	if (attaque_monstre2 == 2){
		pvPerso2 = pvPerso2 - 28;
	}
	if (attaque_monstre2 == 3){
		pvPerso3 = pvPerso3 - 28;
	}
	if (attaque_monstre2 == 4){
		pvPerso4 = pvPerso4 - 28;
	}
}

var attaque_monstre3 = function(){
	var atk_monstre_3 = entierAleatoire(1,4);
	if (attaque_monstre3 == 1){
		pvPerso1 = pvPerso1 - 28;
	}
	if (attaque_monstre3 == 2){
		pvPerso2 = pvPerso2 - 28;
	}
	if (attaque_monstre3 == 3){
		pvPerso3 = pvPerso3 - 28;
	}
	if (attaque_monstre3 == 4){
		pvPerso4 = pvPerso4 - 28;
	}
}

bouton_attaque.onclick = function(){
	info.innerHTML = "Vous attaquez le Roi des Mages";
	if (pvPerso1 > 0 && vie_monstre_2 > 0){
		if (vie_monstre_2  <= atk_heros_1){
			vie_monstre_2 = 0;
		}
		else{
			vie_monstre_2 = vie_monstre_2 - atk_heros_1;
		}
	}
}

function victoire() {
	if (vie_monstre_2 <= 0){
			info.innerHTML = "Vous avez terrassé le Roi des Mages";
	}
	if (vie_monstre_1 <= 0){
			info.innerHTML = "Vous avez terrassé le Dragon de Feu";
	}
	if (vie_monstre_3 <= 0){
			info.innerHTML = "Vous avez terrassé le Dragon de Jade";
	}
	if (vie_monstre_3 <= 0, vie_monstre_1 <= 0, vie_monstre_2 <= 0){
			info.innerHTML = "Vous avez remporté ce combat";
	}
}

function defaite() {
	if (pvPerso1 <= 0){
			info.innerHTML = "Dédé est mort au combat";
	}
	if (pvPerso2 <= 0){
			info.innerHTML = "Gégé est décédé lors de l'affrontement";
	}
	if (pvPerso3 <= 0){
			info.innerHTML = "Bébère a surestimé ses capacités";
	}
	if (pvPerso4 <= 0){
			info.innerHTML = "Dieu est tombé du ciel";
	}
	if (pvPerso1 <= 0, pvPerso2 <= 0, pvPerso3 <= 0, pvPerso4 <= 0){
			info.innerHTML = "Vous avez perdu ce combat";
	}
}


