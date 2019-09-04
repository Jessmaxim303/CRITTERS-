
class Vampire {
	constructor(name, pets){
		this.name = name;
		this.pet =  pets || 'bat';
		this.thirsty = true;
	}
	drink(){
		this.thirsty = false;
	}

}


module.exports = Vampire;
