class Unicorn {
  constructor(name, color) {
  	this.name = name;
  	this.color = color || 'white';
  }
  isWhite(){
  	return false;
  }
  says(words){
  	return `**;* ${words} *;**`;
  }

};

module.exports = Unicorn;
