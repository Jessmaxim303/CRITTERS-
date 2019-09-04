class Dragon {
	constructor(name, rider, color){
		this.name = name;
		this.rider = rider;
		this.color = color;
		this.hungry = true;
		this.timesAte = 0;
	}
	eat() {
		this.timesAte++;
		this.hungry = (this.timesAte > 2) ? false : true;
	}

}



module.exports = Dragon;