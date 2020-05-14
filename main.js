let dropdownActive = () => {
    let dropdown = document.getElementById("dropdownID");
    dropdown.classList.toggle('active'); 
  }

  let menuItemRemoveActive = () => {
    let dropdown = document.getElementById("dropdownID");
    dropdown.classList.toggle('active'); 
  }

  let burgerAnimation = () => {
    let burger = document.getElementById("burger");
    burger.classList.toggle('burger'); 
  }


  const myArray = [
    {
Picture: "https://img.hellofresh.com/f_auto,fl_lossy,q_auto,w_1200/hellofresh_s3/image/hoisin-chicken-fajitas-5674df14.jpg",
Food: "Fajitas",
Recipe: ["Chicken", "Peppers", "Onions", "Wraps","Lettuce"],
Method: ["Fry"]
},
    {  
Picture: "https://www.recipetineats.com/wp-content/uploads/2019/02/Pesto-Pasta_2-1.jpg?resize=650,910",
Food: "Pesto Pasta",
Recipe: ["Chicken", "Pesto", "Pasta", "Olive Oil"],
Method: ["Boil Pasta", "Fry Chicken", "Combine with Pesto"]
}      ,
{
Picture: "https://www.lecremedelacrumb.com/wp-content/uploads/2017/09/pasta-e-fagioli-107.jpg",
Food: "Pasta E Fagoli",
Recipe: ["1 Tbs of Extra Virgin Olive Oil","2 Whole Carrots","4 Celery Stalks","1 Onion","2 cans of chopped tomatoes","2 measures veg stock", "2 bay leaves", "1 tsp dried oregano", "tsp dried basil", "1/2 tsp dried thyme", "1 can of cannellini beans", "1 can of red kidney beans", "1 cup of pasta"],
Method: ["1. Put all ingredients in slowcooker except beans and pasta", "2. Cook on low for 7-8 hours or high for 3-4", "3. 30 mins before serving add pasta and beans"]}
]
    ;

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
const getRecipe = myArray[randomNumber].Recipe;
const getMethod = myArray[randomNumber].Method;



document.getElementById('picture').src = getPicture;
document.getElementById('food').textContent = "You have randomly selected - " + getFood;
// document.getElementById('method').textContent = "Method - " + getMethod;










