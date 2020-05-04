/*const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';*/

// includeHTML() adds the navbar on the page where the .html 
// file contains <div class="mynavbar" currentPage="NAMEOFHTMLFILE"></div>
function includeHTML() {
  var nav = document.querySelector(".mynavbar");
  var currentPage = nav.getAttribute("currentPage")
  nav.innerHTML = '\
    <div class="w3-top site-header">\
      <div class="w3-bar w3-red w3-card w3-left-align w3-large">\
        <a class="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-red" href="javascript:void(0);" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>\
        <a href="index.html" class="w3-bar-item w3-button w3-padding-large w3-hover-white">Home</a>\
        <a href="videocalling.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">How To Set Up A Video Call</a>\
        <a href="what-were-watching.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">What We´re Watching</a>\
        <a href="quiz-writing.html" class="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white">Make Your Own Quiz</a>\
      </div>\
    \
      <div id="navDemo" class="w3-bar-block w3-white w3-hide w3-hide-large w3-hide-medium w3-large">\
        <a href="videocalling.html" class="w3-bar-item w3-button w3-padding-large">How To Set Up A Video Call</a>\
        <a href="what-were-watching.html" class="w3-bar-item w3-button w3-padding-large">What We´re Watching</a>\
        <a href="quiz-writing.html" class="w3-bar-item w3-button w3-padding-large">Make Your Own Quiz</a>\
      </div>\
    </div>'
    
  // nav.innerHTML = ´test´;
  return currentPage
}

//in the html file the tag has currentPage="nameofhtmlfile.html"
// The below code adds the class that makes it white (to show the user that it´s the 
// current page), and removes the class that does the rollover effect
const thisPage = includeHTML();
// var el = document.querySelector("a[href='" + thisPage + "']");
// var el = document.querySelectorAll("a[href='" + thisPage + "']:not(#navDemo)");
var el = document.querySelectorAll("div.w3-bar ~ a[href='" + thisPage + "']:not(#navDemo)");

el[0].classList.add('w3-white');
el[0].classList.remove('w3-hover-white');
// el[1].classList.add('w3-white');
// el[1].classList.remove('w3-hover-white');
