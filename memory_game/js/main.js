 console.log("Up and running!");

 var cards = [
 {
        rank: "queen",
        suite: "hearts",
         cardImage: "images/queen-of-hearts.png"
     },
     {
         rank: "queen",
         suite: "diamonds",
         cardImage: "images/queen-of-diamonds.png"
     },
     {
         rank: "king",
         suite: "hearts",
         cardImage: "images/king-of-hearts.png"
     },
     {
         rank: "king",
         suite: "diamonds",
         cardImage: "images/king-of-diamonds.png",
     }
 ];


 var cardsInPlay = [];


 var checkForMatch = function () {
  	if (cardsInPlay.length === 2) { 
  		if (cardsInPlay[0] === cardsInPlay[1]) {
  			alert("You found a match!");
  		}
	    else  {
		    alert("Sorry try again");
		}
	}	    
};


 var flipCard = function (cardId) {
 cardsInPlay.push(cards[cardId].rank);
 console.log("User flipped " + cards[cardId].rank);
 console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suite);
  
 checkForMatch();
};

flipCard(0);
flipCard(2);




   