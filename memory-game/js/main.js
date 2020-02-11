
console.log("Up and running!");


//var cards = ["queen","queen","king","king"];
var cardsInPlay = [];

var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/queen-of-hearts.png"
},
	
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/queen-of-diamonds.png"
},
	
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/king-of-hearts.png"
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/king-of-diamonds.png" 
},
];

var checkForMatch = function(){
	if (cardsInPlay[0] === cardsInPlay[1]){
		alert ("You found a match!");
	} else {
		alert ("Sorry, try again.");
	}
}
		


var flipCard = function flipCard(cardID) {

	
	console.log ("User flipped " + cards[cardID].rank);
	
	cardsInPlay.push(cards[cardID].rank);

	console.log (cards[cardID].suit);
	console.log(cards[cardID].cardImage);
	if (cardsInPlay.length === 2) {
	checkForMatch();
	}


}

flipCard (0);
flipCard (2);



