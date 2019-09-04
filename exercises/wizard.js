class Wizard {
	constructor(object){
		this.name = object.name;
		this.isRested = true;
		this.bearded = true;
		this.spellsCast = 0;
		if(object.bearded !== undefined){
			this.bearded = object.bearded;
		}
	}
	incantation(spell){
		return spell.toUpperCase();
	}
	cast(){
		this.spellsCast++;
		if(this.spellsCast < 2){
		return 'MAGIC BULLET';
	} else if (this.spellsCast > 2){
		this.isRested = false;
		return 'I SHALL NOT CAST!';
	}
}

}

module.exports = Wizard;





































// class Wizard {
// 	constructor({name, bearded = true}){
// 		this.name = name;
// 		this.bearded = bearded || false;
// 		this.spellsCast = 0;
// 		this.isRested = true;
// 	}
// incantation(spells){
// 	return spells.toUpperCase();
// }

// cast(){
// 	this.spellsCast++;
// 	if(this.spellsCast < 3){
// 		return 'MAGIC BULLET';
// 	} else {
// 		this.isRested = false;
// 		return 'I SHALL NOT CAST!';
// 	}
	
// }

// }