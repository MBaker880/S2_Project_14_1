"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 12
   Case Problem 1

   Author: Mackenzie Baker
   Date:   4.2.2019

   Filename: na_styler.js

   Functions
   =========
   
   setStyles()
      Sets up the style sheets and the style sheet switcher.
      
   randInt(size)
      Returns a random integer from 0 up to size-1.

*/
/* ---------------------------------------------------------------------------------------------------------- */

// Runs the setStyles function when the page is loaded
window.addEventListener("load", setStyles);

function setStyles() {
      var styleNum = randInt(5);
      var linkElem = document.createElement("link");
      linkElem.setAttribute("rel", "stylesheet");
      linkElem.setAttribute("id", "fancySheet");
      linkElem.setAttribute("href", "na_style_" + styleNum + ".css");

      // Attaches the linkElem to the document head since its a seperate element
      document.head.appendChild(linkElem);

      var figBox = document.createElement("figure");
      figBox.setAttribute("id", "styleThumbs");

      // Attaching the figBox object to the div with the id of box
      document.getElementById("box").appendChild(figBox);

      // Populates the figure box for previews of the five wedding website examples
      for (var i = 0; i < 4; i++) {
            var sheetImg = document.createElement("img");
            sheetImg.setAttribute("src", "na_small_" + i + ".png");
            sheetImg.setAttribute("alt", "na_style_" + i + ".css");

            sheetImg
      }

}























/* ---------------------------------------------------------------------------------------------------------- */
function randInt(size) {
   return Math.floor(size*Math.random());
}