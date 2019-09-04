
class Pirate {
	constructor(name, job){
		this.name = name;
		this.job = job || 'Scallywag';
		this.cursed = false;
		this.beingHeinous = 0;
		this.booty = 0;

	}
	commitHeinousAct(){
		this.beingHeinous++;
		this.cursed = (this.beingHeinous > 2) ? true : false;
		}
	
	robShip() {
		this.booty += 100;
		return 'YAARRR!';
	}

}

module.exports = Pirate; 