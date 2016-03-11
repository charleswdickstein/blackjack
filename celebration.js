function hideButton(){
var myButton= document.getElementById('myButton');
	    var myImage= document.getElementById('myImage');

	    myButton.style.display ='none';
	    //myImage.style.display ='inline';

	    setTimeout (function(){
	        myButton.style.display ='inline';
	        //myImage.style.display ='none';
	    },5000);
	   }