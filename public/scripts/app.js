

//IIFE
(function(){
    function Start(){
        console.log('App Started');        
    }

    window.addEventListener('load', Start);//adds start function to the window interface
})();

//***** HOME PAGE *****
//Redirect to about page
//Works with input submit (button)
function clickAbout(){
    window.location.href="./about"
}

//***** ABOUT PAGE *****
//Redirect to contact page
function clickContact(){
    window.location.href="./contact"
}

//***** CONTACT PAGE *****
//Carroussel
var i = 0; 
var images = [];
var time = 1000;

//Image List
images[0] = './content/images/Avatar01.png';
images[1] = './content/images/Avatar02.png';
images[2] = './content/images/Avatar03.png';


//Slideshow
function slideImg(){
    document.slide.src = images[i];

    if (i< images.length - 1) {//array size from 0 to 2
        i++;
    } else {
        i =0;
    }

    setTimeout ("slideImg()", time);

}

//load function
window.onload = slideImg;

//Button to save info
function clickSend(){
    //Prevent to refresh the webpage
    event.preventDefault();   

    //Create an myData object
    const myData = {};

    //Store variables inside myData object
    myData.firstName = document.getElementById("firstName").value;
    myData.lastName = document.getElementById("lastName").value;
    myData.emailAddress = document.getElementById("emailAddress").value;
    myData.userMessage = document.getElementById("userMessage").value;

    alert("Message sent succesfully!");

    //console.log(myData);

    //Redirect to home page
    window.location.href="./home"
}