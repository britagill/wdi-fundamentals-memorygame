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


   this.setAttribute ('src', cards[CardId].cardImage);

     	if (cardsInPlay.length === 2) { 
  		if (cardsInPlay[0] === cardsInPlay[1]) {
  			alert("You found a match!");
  		}
	    else  {
		    alert("Sorry try again");
		}
	}	    
};


 var flipCard = function () {
  var cardId = this.getAttribute('data-id');
  console.log("User flipped " + cards[cardId].rank);
  console.log("User flipped " + cards[cardId].cardImage);
  console.log("User flipped " + cards[cardId].suite);
cardsInPlay.push(cards[cardId].rank);

   this.setAttribute ('src', cards[CardId].cardImage);

checkForMatch();
};




 var createBoard= function () {
  for (var i = 0; i < cards.length; i++) {
      var cardElement = document.createElement('img');
      cardElement.setAttribute('src', 'images/back.png');
      cardElement.setAttribute('data-id', i);
      cardElement.addEventListener('click', flipCard);
      document.getElementById('game-board').appendChild(cardElement);
  };
};
 createBoard();




   