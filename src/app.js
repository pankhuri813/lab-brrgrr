// Write your code on this file. Please don't change the existing code
// unless absolutely needed.

//Initial price of the burger
var wholeWheatBun = 10;

//Ingredients of the burger along with the price
// Clue: the name is same as the textcontent of the button. Will be useful later on :)
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

//Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// This function renders the entire screen everytime the state changes accordingly
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

function renderPatty() {
  let patty = document.querySelector("#patty");
  //you can also use getElementById
  if (state.Patty) {
    patty.style.display = "inherit";
  } else {
    patty.style.display = "none";
  }
}

function renderCheese() {
  //Trial 1 - Change the visibility of cheese based on state by manipulating the DOM
  let cheese = document.getElementById('cheese');
 
  if (state.Cheese) {
    cheese.style.display = "inherit";
  } else {
    cheese.style.display = "none";
  }
}

function renderTomatoes() {
  //Trial 1 - Change the visibility of Tomatoes based on state by manipulating the DOM
  let tomato = document.getElementById('tomato');
 
  if (state.Tomatoes) {
    tomato.style.display = "inherit";
  } else {
    tomato.style.display = "none";
  }
}

function renderOnions() {
  //Trial 1 - Change the visibility of Onions based on state by manipulating the DOM
  let onions = document.getElementById('onion');
 
  if (state.Onions) {
    onions.style.display = "inherit";
  } else {
    onions.style.display = "none";
  }
}

function renderLettuce() {
  //Trial 1 - Change the visibility of Lettuce based on state by manipulating the DOM
  let lettuce = document.getElementById('lettuce');
 
  if (state.Lettuce) {
    lettuce.style.display = "inherit";
  } else {
    lettuce.style.display = "none";
  }
}

document.querySelector(".btn-patty").onclick = function () {
  state.Patty = !state.Patty;
  renderAll();
};

// Trial 2 - Setup event listener for the cheese button

document.querySelector(".btn-cheese").onclick = function () {
  state.Cheese = !state.Cheese;
  rendercheese1()
  renderAll();
}
// Trial 2 - Setup event listener for the tomatoes button

document.querySelector(".btn-tomatoes").onclick = function () {
  state.Tomatoes = !state.Tomatoes;
  rendertomato1()
  renderAll();
}
// Trial 2 - Setup event listener for the onion button

document.querySelector(".btn-onions").onclick = function () {
  state.Onions = !state.Onions;
  renderonion1()
  renderAll();
}
// Trial 2 - Setup event listener for the lettuce button

document.querySelector(".btn-lettuce").onclick = function () {
  state.Lettuce = !state.Lettuce;
  renderlettuce1()
  renderAll();
}
//Challenge 1 - Add/Remove the class active to the buttons based on state
function renderButtons(){
  if(!state.Patty){
    document.querySelector(".btn-patty").classList.remove("active")
  }
  else{
    document.querySelector(".btn-patty").classList.add("active")
  }
  if(!state.Tomatoes){
    document.querySelector(".btn-tomatoes").classList.remove("active")
  }
  else{
    document.querySelector(".btn-tomatoes").classList.add("active")
  }
  if(!state.Lettuce){
    document.querySelector(".btn-lettuce").classList.remove("active")
  }
  else{
    document.querySelector(".btn-lettuce").classList.add("active")
  }
  if(!state.Onions){
    document.querySelector(".btn-onions").classList.remove("active")
  }
  else{
    document.querySelector(".btn-onions").classList.add("active")
  }
  if(!state.Cheese){
    document.querySelector(".btn-cheese").classList.remove("active")
  }
  else{
    document.querySelector(".btn-cheese").classList.add("active")
  }
}


//Challenge 2 - Render only the items selected in the ingredients board based on the state
function renderIngredientsBoard(){
  if(!state.Patty){
    document.getElementById('patty1').style.display='none'
  }
  else{
    document.getElementById('patty1').style.display='block'


  }
  if(!state.Tomatoes){
    document.getElementById('tomato1').style.display='none'
  }
  else{
    document.getElementById('tomato1').style.display='block'


  }
  if(!state.Lettuce){
    document.getElementById('lettuce1').style.display='none'
  }
  else{
    document.getElementById('lettuce1').style.display='block'


  }
  if(!state.Onions){
    document.getElementById('onion1').style.display='none'
  }
  else{
    document.getElementById('onion1').style.display='block'


  }
  if(!state.Cheese){
    document.getElementById('cheese1').style.display='none'
  }
  else{
    document.getElementById('cheese1').style.display='block'


  }
}



//Judgement 1
//In the p element having price-details as the class, display the calculated
//price based on ingredients
var totalprice = 20;

const a = document.getElementById("price1")
function renderPrice(){
  a.innerText=totalprice
  
}

function renderPatty1(){
  if(state.Patty){
    totalprice+=ingredients.Patty
  }
  else{
    totalprice-=ingredients.Patty
  }
  }
  function rendercheese1(){
    if(state.Cheese){
      totalprice+=ingredients.Cheese
    }
    else{
      totalprice-=ingredients.Cheese
    }
    }
    function renderonion1(){
      if(state.Onions){
        totalprice+=ingredients.Onions
      }
      else{
        totalprice-=ingredients.Onions
      }
      }
      function renderlettuce1(){
        if(state.Lettuce){
          totalprice+=ingredients.Lettuce
        }
        else{
          totalprice-=ingredients.Lettuce
        }
        }
        function rendertomato1(){
          if(state.Tomatoes){
            totalprice+=ingredients.Tomatoes
          }
          else{
            totalprice-=ingredients.Tomatoes
          }
          }
