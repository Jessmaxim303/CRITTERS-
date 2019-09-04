class Werewolf {
	constructor(name, location){
		this.name = name;
		this.location = location;
		this.human = true;
		this.wolf = false;
		this.hungry = false;
	}
	change(){
		// this.human = !this.human;
  //   this.wolf = !this.wolf;
    this.wolf = (this.wolf === false) ? true : false;
    this.wolf = (this.wolf === true) ? false : true;
    this.hungry = (this.hungry === true) ? false : true;
	}
	eat(victim){
		victim.alive = (this.hungry === true) ? false : true;
		this.human = (this.human === false) ? true : false;
	}

}

module.exports = Werewolf;
