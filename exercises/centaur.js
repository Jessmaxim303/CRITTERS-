class Centaur {
	constructor(name, breed){
		this.name = name;
		this.breed = breed;
		this.cranky = false;
		this.standing = true;
		this.beingActive = 0;
		this.standing = true;
		this.layingDown = false;
	}

shoot(){
	this.beingActive++;
	this.cranky = (this.beingActive < 3) ? false : true;
	return this.cranky ? 'NO!' : this.layingDown ? 'NO!' : 'Twang!!!';
}

run(){
	this.beingActive++;
	this.cranky = (this.beingActive < 3) ? false : true;
	return this.cranky ? 'NO!' : this.layingDown ? 'NO!' : 'Clop clop clop clop!!!';
}

sleep(){
	this.beingActive = 0;
	this.cranky = false;
	return this.standing ? 'NO!' : 'ZZZZ';
}

layDown(){
	this.standing = false;
	this.layingDown = true;
}

standUp(){
	this.standing = true;
	this.layingDown = false;
}

drinkPotion(){
	this.cranky = false;
}

drinkPotion(){
	this.cranky = false;
	if (this.layingDown === true){
	this.cranky = true;
	return 'Not while I\'m laying down!';
	}
	this.cranky = (this.beingActive < 1) ? true : false;
}

};

module.exports = Centaur;