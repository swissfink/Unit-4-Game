var playerScore = 0;
var wins = 0;
var losses = 0;

document.getElementById("youwinText").style.cssText = "display: none";
document.getElementById("youloseText").style.cssText = "display: none";
document.getElementById("message").style.cssText = "opacity: .0";

checkWin();

//newRandowmNumber SHOULD BE A VARIABLE, NOT AN ARRAY... IT ONLY NEEDS TO HOLD ONE VALUE AT A TIME
var newRandomNumber = "";

// Create a number for the player to match.
function newNumberToGuess() {
  // Generate a random number between 19 and 120.
  var randomNumber = Math.floor(Math.random() * 101) + 19;
  // Add this number to the page so the player can see it.
  document.getElementById("numberToGuess").innerText = randomNumber;
  // store the indicies in the "newRandomNumber" array.
  //newRandomNumber.push(randomNumber);
  newRandomNumber = randomNumber;
  //console.log(randomNumber);
}
newNumberToGuess();

var numberOptions = [];

function newNumbersForCrystals() {

  //NEED TO REMOVE CRYSTALS FROM CRYSTAL CONTAINER EACH TIME YOU GENERATE NEW NUMBERS
  $("#crystals").empty();
  //NEED TO EMPTY THE ARRAY EACH TIME YOU GENERATE NEW NUMBERS
  numberOptions = [];

  // Initiate a loop to create four random numbers.
  for (var n = 0; n < 4; n++) {

    // For each iteration, generate a new random number between 1 and 12.
    var fourRandomNumbers = Math.floor(Math.random() * 12) + 1;

    // store the indicies in the "numberOptions" array.
    numberOptions.push(fourRandomNumbers);
  }
  
  function attachNumbersToCrystals() {
      
    // Initiate a loop to pair one of the four random numbers to a crystal.
    for (var i = 0; i < numberOptions.length; i++) {

      // Create an imageCrystal for each iteration
      var imageCrystal = $("<img>");

      // Given each crystal the class ".crystal-image".
      // This will allow the CSS to take effect.
      imageCrystal.addClass("crystal-image");

      var fourImages = [ "https://pre00.deviantart.net/c200/th/pre/i/2016/363/1/4/rock_crystal_on_a_transparent_background__by_prussiaart-dat9yoo.png", "https://i.pinimg.com/originals/7a/1e/8c/7a1e8cbae81363b96096b4c5d0971705.png", "http://www.transparentpng.com/download/amethyst-stone/simple-ruby-light-ruby-ruby-diamond-mine-purple-diamond-purple-ruby-pictures-1.png", "https://upload.wikimedia.org/wikipedia/commons/c/c3/Euclase-ed02a.jpg" ]

      // Each imageCrystal will be given a src link to a unique crystal image
      imageCrystal.attr("src", fourImages[i]);

      // Each imageCrystal will also be given a data attribute called data-crystalValue.
      // This data attribute will be set equal to the array value.
      imageCrystal.attr("data-crystalvalue", numberOptions[i]);

      // Add each crystal image (with all it classes and attributes) to the page.
      $("#crystals").append(imageCrystal);
    }

  }
  attachNumbersToCrystals();
  crystalClick();
}
newNumbersForCrystals();

//PUT THIS IN ITS OWN FUNCTION THAT CAN BE CALLED EACH TIME YOU PUT NEW CRYSTALS INTO THE PAGE
function crystalClick(){
  $(".crystal-image").on("click", function() {
     
    document.getElementById("youwinText").style.cssText = "display: none";
    document.getElementById("youloseText").style.cssText = "display: none";
    document.getElementById("message").style.cssText = "opacity: .0";

    // Extract the value from the data attribute.
    // Using the $(this) keyword specifies that we should be extracting the crystal value of the clicked crystal.
    // Using the .attr("data-crystalvalue") allows us to grab the value out of the "data-crystalvalue" attribute.
    // Since attributes on HTML elements are strings, we must convert it to an integer before adding to the counter

    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    //console.log(crystalValue)

    // We then add the crystalValue to the player's "score" which is a global variable.
    // Every click, from every crystal adds to the global playerScore.
    playerScore += crystalValue;

    // Add this number to the page so the player can see it.
    document.getElementById("scoreText").innerText = playerScore;

    // After each click, check to see if the player has won or lost.
    checkWin();
  })
}

function checkWin() {
  console.log("playerScore = "+playerScore+" | newRandomNumber = "+newRandomNumber);

  // If the player matches the number
  if (playerScore == newRandomNumber) {
    wins++;
    playerScore = 0;
    newNumberToGuess();
    newNumbersForCrystals();
    document.getElementById("youwinText").style.cssText = "display: block";
    document.getElementById("message").style.cssText = "opacity: .9";
  }

  // if the player goes over the number
  else if (playerScore >= newRandomNumber) {
    losses++;
    playerScore = 0;
    newNumberToGuess();
    newNumbersForCrystals();
    document.getElementById("youloseText").style.cssText = "display: block";
    document.getElementById("message").style.cssText = "opacity: .9";
  }

  document.getElementById("winsText").innerText = wins;
  document.getElementById("lossesText").innerText = losses;
  document.getElementById("scoreText").innerText = playerScore;

}
