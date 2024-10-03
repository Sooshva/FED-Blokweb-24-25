// JavaScript Document
// menu-button wordt een variabele
var openButton = document.querySelector("#Menu li button");

// menu-button moet luisteren naar add eventlistener en voer dan een functie uit
openButton.onclick = function() {
    console.log("Menu geopend");
    var deNav = document.querySelector("nav");
    deNav.classList.add("toonMenu");
};

// kruis-button wordt een variabele (wordt gezicht in DOM)
var sluitButton = document.querySelector("#Hamburger li button");

// button moet luisteren naar kliks, dus classlist.remove WANT de functie om het tevoorschijn halen is er, 
// maar je wilt niet coderen voor saus. Dus haal het rustig weg.
sluitButton.onclick = function() {
    var deNav = document.querySelector("nav");
    deNav.classList.remove("toonMenu");
};

// Bonus: menu sluiten met escape. Dit stond er in de oefening. 
window.onkeydown = function(event) {
    if (event.key === "Escape") {
        var deNav = document.querySelector("nav");
        deNav.classList.remove("toonMenu");
    }
};