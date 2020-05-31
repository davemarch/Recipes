const myArray = [
  {
Picture: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/hoisin-chicken-fajitas-5674df14.jpg",
Food: 'Fajitas',
Recipe: ["Chicken", "Peppers", "Onions", "Wraps","Lettuce"],
Method: ["Fry"]
},
  {  
Picture: "https://www.recipetineats.com/wp-content/uploads/2019/02/Pesto-Pasta_2-1.jpg?resize=650,910",
Food: "Pesto Pasta",
Recipe: ["Chicken", "Pesto", "Pasta", "Olive Oil"],
Method: ["Boil Pasta", "Fry Chicken", "Combine"]
}      ,
{
Picture: "https://www.lecremedelacrumb.com/wp-content/uploads/2017/09/pasta-e-fagioli-107.jpg",
Food: "Pasta E Fagoli",
Recipe: ["1 Tbs of Extra Virgin Olive Oil","2 Whole Carrots","4 Celery Stalks","1 Onion","2 cans of chopped tomatoes","2 measures veg stock", "2 bay leaves", "1 tsp dried oregano", "tsp dried basil", "1/2 tsp dried thyme", "1 can of cannellini beans", "1 can of red kidney beans", "1 cup of pasta"],
Method: ["1. Put all ingredients in slowcooker except beans and pasta", "2. Cook on low for 7-8 hours or high for 3-4", "3. 30 mins before serving add pasta and beans"]},

{
Picture: "https://144f2a3a2f948f23fc61-ca525f0a2beaec3e91ca498facd51f15.ssl.cf3.rackcdn.com/uploads/food_portal_data/recipes/recipe/hero_article_image/71/527501179e9319cf888f/letterbox_Summer_20paella.jpg",
Food: "Paella",
Recipe: ["2 Garlic Cloves","Chorizo Substitute","6 x Spring Onions or 1 x Onions","200g of Paella Rice","1 x Red Pepper","100g of Frozen Peas", "Fresh Tomatoes", "1 tsp paprika", "1 tsp tumeric", "650 ml of veg stock"],
Method: ["Fry the garlic and chorizo", "Add onions, tumeric, rice and red pepper - For 2-3 minutes until rice is opaque", "Add the stock and simmer for 10 minutes", "Add peas and tomatoes and simmer for another 10 minutes."]
}
,
{
  Picture: "https://www.bbcgoodfood.com/sites/default/files/styles/recipe/public/user-collections/my-colelction-image/2015/12/recipe-image-legacy-id--901451_9.jpg",
  Food: "Yorkshire Puddings",
  Recipe: ["140g - Plain Flour", "4x Eggs", "200ml - Milk", "Sunflour Oil"],
  Method: ["Oven at 210C Fan", "", "",]
  }
,
{
  Picture: "https://keviniscooking.com/wp-content/uploads/2017/10/Turkish-Spice-Blend1.jpg",
  Food: "Montreal Steak Spice Blend",
  Recipe: ["2 Tbsp - Sea Salt", "2 Tbps - Black Peppercorns", "1 tsp - Caraway Seeds", "1 tsp - Coriander Seeds", "1 tsp - Cumin Seeds", "1 tsp - Fennel Seeds", " 1 tsp - Celery Seeds" ],
  Method: ["Blend together, one at a time to get consistency", "Add celery seeds at the end"]
  },

  {
    Picture: "https://www.simplyrecipes.com/wp-content/uploads/2014/07/hard-boiled-eggs-horiz-800-600x400.jpg",
    Food: "Boiled Eggs",
    Recipe: ["2 Tbsp - Sea Salt", "2 Tbps - Black Peppercorns", "1 tsp - Caraway Seeds", "1 tsp - Coriander Seeds", "1 tsp - Cumin Seeds", "1 tsp - Fennel Seeds", " 1 tsp - Celery Seeds" ],
    Method: ["Blend together, one at a time to get consistency", "Add celery seeds at the end"]
    },

    {
      Picture: "https://www.simplyrecipes.com/wp-content/uploads/2014/07/grilled-corn-on-the-cob-vertical-600-600x856.jpg",
      Food: "Corn on the Cob",
      Recipe: ["2 Tbsp - Sea Salt", "2 Tbps - Black Peppercorns", "1 tsp - Caraway Seeds", "1 tsp - Coriander Seeds", "1 tsp - Cumin Seeds", "1 tsp - Fennel Seeds", " 1 tsp - Celery Seeds" ],
      Method: ["Blend together, one at a time to get consistency", "Add celery seeds at the end"]
      },

      {
        Picture: "https://www.simplyrecipes.com/wp-content/uploads/2018/07/Guacamole-LEAD-1-600x840.jpg",
        Food: "Guacamole",
        Recipe: ["2 Tbsp - Sea Salt", "2 Tbps - Black Peppercorns", "1 tsp - Caraway Seeds", "1 tsp - Coriander Seeds", "1 tsp - Cumin Seeds", "1 tsp - Fennel Seeds", " 1 tsp - Celery Seeds" ],
        Method: ["Blend together, one at a time to get consistency", "Add celery seeds at the end"]
        },

]
  ;

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
  // imgGridDiv.innerHTML = '<img class="imgGrid" id="imgGridId" src="' + myArray[i].Picture + '" onclick=document.getElementById("welcomeTextContainer").remove();getClickedRecipe('+i+');recipeActive();></img>';
  imgGridDiv.style.backgroundImage = "url("  + myArray[i].Picture + " )";


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






