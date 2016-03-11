var blackjack = 0; 
var count = 0;
document.cookie = "blackjack=" + blackjack; +";";
function deal(){
	count++;
	var cardNumOne = Math.floor(Math.random() * 13 + 2);
	var cardNumTwo = Math.floor(Math.random() * 13 + 2);

	var cardSuitOne = Math.floor(Math.random()* 4 + 1);
	var cardSuitTwo = Math.floor(Math.random()* 4 + 1);

	var cardSuitStringOne = "";
	var cardSuitStringTwo = "";

	var cardValueOne = 0;
	var cardValueTwo = 0;

	


	var aceCount = 0;

	switch (cardSuitOne){
		case 1:
			cardSuitStringOne = "Clubs";
			break;
		case 2:
			cardSuitStringOne = "Diamonds";
			break;
		case 3:
			cardSuitStringOne = "Hearts";
			break;
		case 4:
			cardSuitStringOne = "Spades";
			break;
		
	}

	switch (cardSuitTwo){
		case 1:
			cardSuitStringTwo = "Clubs";
			break;
		case 2:
			cardSuitStringTwo = "Diamonds";
			break;
		case 3:
			cardSuitStringTwo = "Hearts";
			break;
		case 4:
			cardSuitStringTwo = "Spades";
			break;
		
	}


	

	if (cardNumOne < 11){
		cardValueOne = cardNumOne;
	}
	else if (cardNumOne == 11){
		
		cardValueOne = 11;
	
		
	}

	else if (cardNumOne == 11 && cardNumTwo == 11){
			cardValueOne = 1;
		
	}
	
	else{
		cardValueOne = 10;
	}

	if (cardNumTwo < 11){
		cardValueTwo = cardNumTwo;
		
	}
	
	else if (cardNumTwo == 11){
		cardValueTwo = 11;
	}
	else{
		cardValueTwo = 10;
	}
		
	
	// document.write("<h1>" + cardSuitStringOne + "</h1>");

	var suitOne = Math.floor(Math.random() * 4 +1);
	var suitTwo = Math.floor(Math.random() * 4 +1);
	var total = cardValueOne + cardValueTwo;

	
	// var imageOne = document.getElementById("imageOne").src= "deckOfCard2/" + cardNumOne + "hearts.gif";
	// var ImageTwo = document.getElementById("imageTwo").src= "deckOfCard2/" + cardNumTwo + "hearts.gif";
	var imageOne = document.getElementById("imageOne").src= "deckOfCard/" + cardNumOne + "of" + cardSuitStringOne + ".jpg";
	var ImageTwo = document.getElementById("imageTwo").src= "deckOfCard/" + cardNumTwo + "of" + cardSuitStringTwo + ".jpg";

	document.getElementById('numOne').value = cardValueOne;
	document.getElementById('numTwo').value = cardValueTwo;
	document.getElementById('total').value = total;
	document.getElementById('handsDealt').value = count;

	
	
	if (total === 21){
		blackjack++;
		document.cookie = "blackj=" + blackjack; +";";
		// window.open("index.html");
		checkC();
		//setTimeout('', 5000);
		//var win = "celebration.html", '1366002941508','width=500,height=200,left=375,top=330';
		// var myButton= document.getElementById('myButton');
	 //    var myImage= document.getElementById('myImage');

	 //    myButton.style.display ='none';
	 //    //myImage.style.display ='inline';
		setTimeout("window.open('celebration.html')",2000);

	 //        window.open("celebration.html", '1366002941508','width=500,height=200,left=375,top=330');
	 //        //myImage.style.display ='none';
	 //    },5000);

	//setTimeout(function () { win.close();}, 3000);
	}
	

}
function displayCookies() {
	
	var outMsg = "";
	if (document.cookie == "") {
		outMsg = "There are no cookies here";
	}
	else {
		var thisCookie = document.cookie.split("; ");
		for (var i=0; i<thisCookie.length; i++) {
			outMsg += "The Cookie name is '" + thisCookie[i].split("=")[0];
			outMsg += "', and the value is '" + thisCookie[i].split("=")[1] + "'<br />";
			
		}
	}
	document.getElementById("cookieNames").innerHTML = outMsg;
}
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
	

}

function getCookie(cname) {
    var name = cname + "=";
    
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    // var cb = document.cookie.split(';');
    // for(var i=0; i<cb.length; i++) {
    //     var b = cb[i];
    //     while (b.charAt(0)==' ') b = b.substring(1);
    //     if (b.indexOf(blackjack) == 0) return b.substring(blackjack.length, b.length);
    // }

 
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Welcome again " + user);
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}

function setC(blackj, blackjvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = blackj + "=" + blackjvalue + "; " + expires;
}

function getC(blackj) {
    var name = blackj + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}

function checkC() {
    var wins = getCookie("blackj");
    if (wins != "") {
        alert("You have " + wins + " blackjacks");
    } else {
        wins = alert("you have zero blackjacks");
        blackjack = 0;
        if (wins != "" && wins != null) {
            setCookie("black", wins, 365);
        }
    }
}





checkCookie();
checkC();


// window.onload = function() {
//     document.getElementById("submit").onclick = function fun() {
//         deal();
//         //validation code to see State field is mandatory.  
//     }}
// deal();