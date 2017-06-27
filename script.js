var bobOmbInputValue = document.getElementById("bob-omb-input").value;
var cheepCheepInputValue = document.getElementById("cheep-cheep-input").value;
var goombaInput = document.getElementById("goomba-input");
var bobOmbInput = document.getElementById("bob-omb-input");
var cheepCheepInput = document.getElementById("cheep-cheep-input");
var totalGoomba = document.getElementById("total-goomba");
var totalBobOmb = document.getElementById("total-bob-omb");
var totalCheepCheep = document.getElementById("total-cheep-cheep");
var goombaCapt = document.getElementById("goomba-capt");
var bobOmbCapt = document.getElementById("bob-omb-capt");
var cheepCheepCapt = document.getElementById("cheep-cheep-capt");
var totalGoombaMoney = document.getElementById("total-goomba-money");
var totalBobOmbMoney = document.getElementById("total-bob-omb-money");
var totalCheepCheepMoney = document.getElementById("total-cheep-cheep-money");
var absoluteTotal = document.getElementById("absolute-total");



//CHANGE TOTAL GOOMBA COUNT************
//*************************************
//*************************************

var goombaTotal = 12;
var newGoombaTotal = 0;
var goombavalue = 0

var showGoombaCapt = function () {

    totalGoomba.innerHTML = newGoombaTotal;
}
var changeGoombaCapt = function () {
    newGoombaTotal = goombaTotal + goombavalue;
    showGoombaCapt();

}


var checkIfGoombaNumber = function () {
    var goombaInputValue = parseInt(document.getElementById("goomba-input").value);
    goombavalue = goombaInputValue;
    if (!goombavalue) {
        newGoombaTotal = 12
        totalGoomba.innerHTML = newGoombaTotal;

    } else {
        changeGoombaCapt();
    }
}


goombaInput.addEventListener("keyup", checkIfGoombaNumber);
goombaInput.addEventListener("mouseup", checkIfGoombaNumber);









//CHANGE TOTAL GOOMBA AMOUNT***********
//*************************************
//*************************************
var goombaCoins = 0;
var absoluteGoombaCoins = 60;
var changeGoombaAmount = function () {
    goombaCoins = (newGoombaTotal * 5) + " COINS";
    absoluteGoombaCoins = (newGoombaTotal * 5);
    totalGoombaMoney.innerHTML = goombaCoins;
}

goombaInput.addEventListener("keyup", changeGoombaAmount);
goombaInput.addEventListener("mouseup", changeGoombaAmount);









//CHANGE TOTAL BOB-OMB COUNT***********
//*************************************
//*************************************
var bobOmbTotal = 8;
var newBobOmbTotal = 0;
var bobOmbvalue = 0

var showBobOmbCapt = function () {

    totalBobOmb.innerHTML = newBobOmbTotal;
}
var changeBobOmbCapt = function () {
    newBobOmbTotal = bobOmbTotal + bobOmbvalue;
    showBobOmbCapt();

}


var checkIfBobOmbNumber = function () {
    var bobOmbInputValue = parseInt(document.getElementById("bob-omb-input").value);
    bobOmbvalue = bobOmbInputValue;
    if (!bobOmbvalue) {
        newBobOmbTotal = 8
        totalBobOmb.innerHTML = newBobOmbTotal;

    } else {
        changeBobOmbCapt();
    }
}


bobOmbInput.addEventListener("keyup", checkIfBobOmbNumber);
bobOmbInput.addEventListener("mouseup", checkIfBobOmbNumber);








//CHANGE TOTAL BOB-OMB AMOUNT**********
//*************************************
//*************************************
var bobOmbCoins = 0;
var absoluteBobOmbCoins = 56;
var changeBobOmbAmount = function () {
    bobOmbCoins = (newBobOmbTotal * 7) + " COINS";
    absoluteBobOmbCoins = (newBobOmbTotal * 7);
    totalBobOmbMoney.innerHTML = bobOmbCoins;
}

bobOmbInput.addEventListener("keyup", changeBobOmbAmount);
bobOmbInput.addEventListener("mouseup", changeBobOmbAmount);









//CHANGE TOTAL CHEEP-CHEEP COUNT*******
//*************************************
//*************************************
var cheepCheepTotal = 5;
var newCheepCheepTotal = 0;
var cheepCheepvalue = 0

var showCheepCheepCapt = function () {

    totalCheepCheep.innerHTML = newCheepCheepTotal;
}
var changeCheepCheepCapt = function () {
    newCheepCheepTotal = cheepCheepTotal + cheepCheepvalue;
    showCheepCheepCapt();

}


var checkIfCheepCheepNumber = function () {
    var cheepCheepInputValue = parseInt(document.getElementById("cheep-cheep-input").value);
    cheepCheepvalue = cheepCheepInputValue;
    if (!cheepCheepvalue) {
        newCheepCheepTotal = 5
        totalCheepCheep.innerHTML = newCheepCheepTotal;

    } else {
        changeCheepCheepCapt();
    }
}


cheepCheepInput.addEventListener("keyup", checkIfCheepCheepNumber);
cheepCheepInput.addEventListener("mouseup", checkIfCheepCheepNumber);









//CHANGE TOTAL CHEEP-CHEEP AMOUNT******
//*************************************
//*************************************
var cheepCheepCoins = 0;
var absoluteCheepCheepCoins = 55;
var changeCheepCheepAmount = function () {
    cheepCheepCoins = (newCheepCheepTotal * 11) + " COINS";
    absoluteCheepCheepCoins = (newCheepCheepTotal * 11);
    totalCheepCheepMoney.innerHTML = cheepCheepCoins;
}

cheepCheepInput.addEventListener("keyup", changeCheepCheepAmount);
cheepCheepInput.addEventListener("mouseup", changeCheepCheepAmount);









//CHANGE ABSOLUTE TOTAL AMOUNT*********
//*************************************
//*************************************
var completeTotal = 0;
var changeAbsoluteTotal = function () {
    completeTotal = (absoluteGoombaCoins + absoluteBobOmbCoins + absoluteCheepCheepCoins);
    absoluteTotal.innerHTML = completeTotal + " COINS";
}

goombaInput.addEventListener("keyup", changeAbsoluteTotal);
bobOmbInput.addEventListener("keyup", changeAbsoluteTotal);
cheepCheepInput.addEventListener("keyup", changeAbsoluteTotal);
goombaInput.addEventListener("mouseup", changeAbsoluteTotal);
bobOmbInput.addEventListener("mouseup", changeAbsoluteTotal);
cheepCheepInput.addEventListener("mouseup", changeAbsoluteTotal);









//MAKE GOOMBA PICTURE SMOOSH***********
//*************************************
//*************************************
var goombaSmoosh = function(){
    goombaCapt.innerHTML = "<img class=\"goomba-align\" alt=\"Goomba\" src=\"images/solo%20goomba.png\" height=\"50\" width=\"300\">"
}

var goombaUnSmoosh = function(){
    goombaCapt.innerHTML = "<img class=\"goomba-align\" alt=\"Goomba\" src=\"images/solo%20goomba.png\" height=\"200\">"
}
goombaInput.addEventListener("keydown", goombaSmoosh);
goombaInput.addEventListener("mousedown",goombaSmoosh);
goombaInput.addEventListener("keyup", goombaUnSmoosh);
goombaInput.addEventListener("mouseup",goombaUnSmoosh);






//MAKE BOB-OMB PICTURE EXPLODE*********
//*************************************
//*************************************
var bobOmbSmoosh = function(){
    bobOmbCapt.innerHTML = "<img  class=\"bob-omb-align\" alt=\"Explosion\" src=\"images/explosion.png\" height=\"200\">";
}

var bobOmbUnSmoosh = function(){
    bobOmbCapt.innerHTML = "<img class=\"bob-omb-align\" alt=\"Bob-omb\" src=\"images/solo%20bob-omb.png\" height=\"200\">";
}
bobOmbInput.addEventListener("keydown", bobOmbSmoosh);
bobOmbInput.addEventListener("mousedown",bobOmbSmoosh);
bobOmbInput.addEventListener("keyup", bobOmbUnSmoosh);
bobOmbInput.addEventListener("mouseup",bobOmbUnSmoosh);











//MAKE CHEEP-CHEEP PICTURE SMOOSH******
//*************************************
//*************************************

var cheepCheepSmoosh = function(){
    cheepCheepCapt.innerHTML = "<img class=\"cheep-cheep-align\" alt=\"Cheep-cheep\" src=\"images/solo%20cheep-cheep.png\" height=\"50\" width=\"300\">";
}

var cheepCheepUnSmoosh = function(){
    cheepCheepCapt.innerHTML = "<img class=\"cheep-cheep-align\" alt=\"Cheep-cheep\" src=\"images/solo%20cheep-cheep.png\" height=\"200\">";
}
cheepCheepInput.addEventListener("keydown", cheepCheepSmoosh);
cheepCheepInput.addEventListener("mousedown", cheepCheepSmoosh);
cheepCheepInput.addEventListener("keyup", cheepCheepUnSmoosh);
cheepCheepInput.addEventListener("mouseup",cheepCheepUnSmoosh);
