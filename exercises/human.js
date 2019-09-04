class Human{
	constructor(name){
		this.name = name;
		this.encounterCounter = 0;
		this.knockedOut = false;
	}
	noticesOgre(){
		return (this.encounterCounter === 3 || this.encounterCounter === 6) ? true : false; 
	}
}

module.exports = Human;