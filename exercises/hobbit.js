class Hobbit {
	constructor(name){
		this.name = name;
		this.disposition = 'homebody';
		this.age = 0;
		this.old = false;
		this.adult = false;
		this.isShort = true;
		this.hasRing = false;
		if(this.name === 'Frodo'){
			this.hasRing = true;
		}

	}
celebrateBirthday(){
	this.age++;
	// this.adult = (this.age < 33) ? false : true;
	// this.adult = (this.age > 32) ? true : false;
	if (this.age < 33){
		this.adult = false;
	}
	if (this.age > 32){
		this.adult = true;
	}
	if (this.age > 100){
		this.old = true;
	}

	}

}

module.exports = Hobbit;




























// class Hobbit {
// 	constructor(name){
// 		this.name = name;
// 		this.disposition = 'homebody';
// 		this.age = 0;
// 		this.old = false;
// 		this.adult = false;
// 		this.isShort = true;
// 		this.hasRing = false;
// 		this.hasRing = (this.name === 'Frodo') ? true : false;	
// }

// 	celebrateBirthday(){
// 		this.age++;
// 		this.adult = (this.age > 32) ? true : false;
// 		this.adult = (this.age < 33) ? false : true;
// 		this.old = (this.age > 100) ? true : false;
// 	}


// }

// module.exports = Hobbit;