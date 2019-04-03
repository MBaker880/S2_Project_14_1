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

      document.head.appendChild(linkElem);

}























/* ---------------------------------------------------------------------------------------------------------- */
function randInt(size) {
   return Math.floor(size*Math.random());
}