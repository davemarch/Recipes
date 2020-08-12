
let welcomeMessage = () => {
  init();
  if (document.getElementById("welcomeText"))
  {   document.getElementById("welcomeText"); 
}  else {
  let container = document.querySelector(".container");
  let p = document.createElement("div");
  p.id = "welcomeTextContainer";
  p.className ="row";
  p.appendChild(document.createTextNode("testing"));
  container.appendChild(p);
  p.innerHTML = '<h1 class="welcomeText" id="welcomeText">Welcome to the recipe web app!</h1>';
  for (var i = 0; i < myArray.length; i++) {
  let imgGridDiv = document.createElement("div");
  imgGridDiv.className ="imgGridContainer";
  imgGridDiv.appendChild(document.createTextNode(""));
  p.appendChild(imgGridDiv);
  imgGridDiv.style.animation = "fadein 2s";
  imgGridDiv.style.animationDelay = i/10 + 's';
  imgGridDiv.style.animationPlayState = "initial"
  imgGridDiv.style.backgroundImage = "url("  + myArray[i].Picture + " )";



///// TESTING ////////
  let imgGridP = document.createElement("p");
  imgGridP.className ="imgGridContainerText";
  imgGridP.appendChild(document.createTextNode(""));
  imgGridDiv.appendChild(imgGridP);
  imgGridP.innerHTML = '<h1>' + myArray[i].Food + '</h1>';



}
addOnclicks();
}};


let imgGridContainer = document.getElementsByClassName("imgGridContainer");

let addOnclicks = () => {

for (var i = 0; i < myArray.length; i++) {

(function(index){
  imgGridContainer[i].onclick = function(){
    // alert(index);
    getClickedRecipe(index);
    recipeActive();
    document.getElementById("welcomeTextContainer").remove();

  }    
})(i); 
};
};


let dropdownActive = () => {
    let dropdown = document.getElementById("dropdownID");
    dropdown.classList.toggle('active'); 
  }

  let dropdownClear = () => {
    let dropdown = document.getElementById("dropdownID");
    dropdown.classList.remove('active'); 
  }

  let menuItemRemoveActive = () => {
    let dropdown = document.getElementById("dropdownID");
    dropdown.classList.toggle('active'); 
    let burger = document.getElementById("burger");
    burger.classList.toggle('burger'); 

    if (document.getElementById("welcomeText"))
  {   document.getElementById("welcomeTextContainer").remove(); 
}

  }

  let burgerAnimation = () => {
    let burger = document.getElementById("burger");
    burger.classList.toggle('burger'); 
  };





// CLEAR LIST FUNCTION //

function clearList() {
var ul = document.getElementById("foodIndex");
var listLength = ul.children.length;
for (i = 0; i < listLength; i++) {
  ul.removeChild(ul.children[0]);
  }
};
// ******************* //  





function init(){


clearList();
document.getElementById("foodIndex").classList.add('hideIndex');
document.getElementById('picture').src = '';
document.getElementById('food').textContent = '';

    var ul = document.getElementById("recipe");
    var listLength = ul.children.length;

    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
  }

    var ul = document.getElementById("method");
    var listLength = ul.children.length;

    for (i = 0; i < listLength; i++) {
      ul.removeChild(ul.children[0]);
  }


};



function getRandomRecipe(){

  init();

const randomNumber = (Math.floor(Math.random() * myArray.length));
let ingredientsArrayLength = myArray[randomNumber].Recipe.length;

for (var i = 0; i < ingredientsArrayLength; i++) {
  var ul = document.getElementById("recipe");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(myArray[randomNumber].Recipe[i]));
  ul.appendChild(li);
}

let methodArrayLength = myArray[randomNumber].Method.length;

for (var i = 0; i < methodArrayLength; i++) {
  var ul = document.getElementById("method");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(myArray[randomNumber].Method[i]));
  ul.appendChild(li);
}

const getPicture = myArray[randomNumber].Picture;
const getFood = myArray[randomNumber].Food;

document.getElementById('picture').src = getPicture;
document.getElementById('food').textContent = "You have randomly selected - " + getFood;
  
};

function getClickedRecipe(randomNumber){

  init();

  let ingredientsArrayLength = myArray[randomNumber].Recipe.length;

for (var i = 0; i < ingredientsArrayLength; i++) {
  var ul = document.getElementById("recipe");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(myArray[randomNumber].Recipe[i]));
  ul.appendChild(li);
}

let methodArrayLength = myArray[randomNumber].Method.length;

for (var i = 0; i < methodArrayLength; i++) {
  var ul = document.getElementById("method");
  let li = document.createElement("li");
  li.appendChild(document.createTextNode(myArray[randomNumber].Method[i]));
  ul.appendChild(li);
}

const getPicture = myArray[randomNumber].Picture;
const getFood = myArray[randomNumber].Food;

document.getElementById('picture').src = getPicture;
document.getElementById('food').textContent = "You have selected - " + getFood + " from the index";
  
};






let recipeActive = () => {
  let recipe = document.getElementById("recipeContent");
  recipe.classList.add('showRecipe');}


function loadIndex() {
  clearList();
  init();
  document.getElementById("foodIndex").classList.remove('hideIndex');
  document.getElementById("foodIndex").classList.add('showIndex');


  for (var i = 0; i < myArray.length; i++) {
    var ul = document.getElementById("foodIndex");
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(myArray[i].Food));
    ul.appendChild(li);
    li.innerHTML = '<a onclick="getClickedRecipe(' + i + ');recipeActive();">' + myArray[i].Food + '</a>';
  }
}
;






