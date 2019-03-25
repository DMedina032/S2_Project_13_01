"use strict";

/*
   New Perspectives on HTML5, CSS3, and JavaScript 6th Edition
   Tutorial 11
   Case Problem 1

   Author: Dajah Medina
   Date:   3.12.19
   
   Filename: bw_review.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers.
      
   lightStars(e)
      Function that colors the stars representing the user rating
      for the book.
      
   turnOffStars(e)
      Function that restores the stars to empty colors, removing
      the user rating for the book.

   updateCount()
      Updates the count of characters in the wordCountBox
      element.

   countCharacters(textStr)
      Returns the number of a non-whitespace characters
      within textStr

*/
// the init function purpose is to define the event listeners used in the page. 
window.onload = init;

function init() {
      //  This loops through the star collection for each star image and changes the cusor style to pointer and added an eventListener to run the light stars function and mouseenter is an event thats occuring over each star image. The text area box runs the updateCount function in response to the keyup event.
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < stars.length; i++) {
            stars[i].style.cursor = "pointer";
            stars[i].addEventListener("mouseenter", lightStars);
      }

      // by using the document.getElementById I was able to target the comment id in the HTML and added an event listener with the cursor style set to keyup.
      document.getElementById("comment").addEventListener("keyup", updateCount);

}
// funnction alows us so set the lightStars with the perameter of e and inside of that, I declared the varible of starNumber and set the value of e.target.alt. I again declared a value this time called stars and set the value to a document and querySelectall is used to select everything in the quotation marks. I created a for loop to loop  through the starNumber varible for everythng in the array and the same thing for the the other image.
function lightStars(e) {
      var starNumber = e.target.alt;
      var stars = document.querySelectorAll("span#stars img");

      for (var i = 0; i < starNumber; i++) {
            stars[i].src = "bw_star2.png";
      }
      for (var i = starNumber; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = starNumber + "stars";
      e.target.addEventListener("mouseleave", turnOffStars);
      e.target.addEventListener("click",
            function () {
                  e.target.removeEventListener("mouseleave", turnOffStars);
            }
      );
}

function turnOffStars() {
      var stars = document.querySelectorAll("span#stars img");
      for (var i = 0; i < 5; i++) {
            stars[i].src = "bw_star.png";
      }
      document.getElementById("rating").value = "";
}





/*=================================================================*/
function updateCount() {
      var commentText = document.getElementById("comment").value;
      var charCount = countCharacters(commentText);
      var wordCountBox = document.getElementById("wordCount");
      wordCountBox.value = charCount + "/1000";
      if (charCount > 1000) {
            wordCountBox.style.color = "white";
            wordCountBox.style.backgroundColor = "red";
      } else {
            wordCountBox.style.color = "black";
            wordCountBox.style.backgroundColor = "white";
      }
}

function countCharacters(textStr) {
      var commentregx = /\s/g;
      var chars = textStr.replace(commentregx, "");
      return chars.length;
}