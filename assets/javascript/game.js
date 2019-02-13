
// var randomNumber = "";

var playerScore = 0;
var wins = 0;
var losses = 0;

$(document).ready(function () {
    // console.log("Ready to go!");
})

// Create a number for the player to match.
// function newNumberToGuess() {
    // generate a new random number between 19 and 120.
    var randomNumber = Math.floor(Math.random() * 101) + 19;
    // Add this number for the player to guess to the page.
    $("#numberToGuess").text(randomNumber);
    // console.log(randomNumber);
// }

// newNumberToGuess();

// Create an empty array that will hold the four options.
var numberOptions = [];

// Create multiple crystals that each have their own unique number value.
function activateCrystals() {

    // Then initiate a loop to generate 4 separate numbers for the numberOptions
    for (var n = 0; n < 4; n++) {

        // For each iteration, generate a new random number between 1 and 12.
        var fourRandomNumbers = Math.floor(Math.random() * 12) + 1;
        // console.log(fourRandomNumbers);
        
        // Loop through options and pick one of the four random numbers 
        // store the indicies in the "numberOptions" array.
        if(fourRandomNumbers) {
            numberOptions.push(fourRandomNumbers);
        }
        // console.log(numberOptions);
    }
}

activateCrystals();

// Create four crystals and assign a value to each from the numberOption array.
function valueCrystals() {

    // Initiate a loop to pair the four random numbers to four different crystals.
    for (var i = 0; i < numberOptions.length; i++) {

        // Create an imageCrystal for each iteration
        var imageCrystal = $("<img>");

        // Each crystal will be given the class ".crystal-image".
        // This will allow the CSS to take effect.
        imageCrystal.addClass("crystal-image");

        // Each imageCrystal will be given a src link to the crystal image
        imageCrystal.attr("src", "http://cdn.playbuzz.com/cdn/35910209-2844-45c0-b099-f4d82878d54f/00261fda-4062-4096-81fd-8cf96b9034e8.jpg");

        // Each imageCrystal will also be given a data attribute called data-crystalValue.
        // This data attribute will be set equal to the array value.
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

        // Add each crystal image (with all it classes and attributes) to the page.
        $("#crystals").append(imageCrystal);
    }
}

valueCrystals(); 

// it's good up to here

$(".crystal-image").on("click", function () {

    // Determining the crystal's value requires us to extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    
    // We then add the crystalValue to the user's "counter" which is a global variable.
    // Every click, from every crystal adds to the global counter.
    playerScore += crystalValue;

    // All of the same game win-lose logic applies. So the rest remains unchanged.
    $("#scoreText").text(playerScore);
    // alert("New score: " + playerScore);

    if (playerScore === randomNumber) {
        wins++;
        $("#winsText").text(wins);
        // alert("You win!");
    }

    else if (playerScore >= randomNumber) {
        losses++;
        $("#lossesText").text(losses++);
        // alert("You lose!!");
    }
});
