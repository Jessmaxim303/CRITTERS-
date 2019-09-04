class Sphinx {
	constructor(){
		this.riddles = [];
		this.heroesEaten = 0;
		this.response = 'That wasn\'t that hard, I bet you don\'t get the next one';
	}

collectRiddle(riddle){
	(this.riddles.length < 3) ? this.riddles.push(riddle) : (this.riddles.shift(riddle) , this.riddles.push(riddle));
}

attemptAnswer(answer){
// for(var i = 0; i < this.riddles.length; i++){
// 	(answer === this.riddles[i].answer) ? this.riddles.splice(i, 1) : this.heroesEaten++;
// 	}
for(var i = 0; i < this.riddles.length; i++){
if(answer === this.riddles[i].answer){
this.riddles.splice(i, 1);
} else if (answer !== this.riddles[i].answer) {
	this.heroesEaten++;
}
}	
		return this.response;
 }

}
module.exports = Sphinx;