import '../scss/styles.scss'
import $ from "jquery";
import home from "../pages/home";
import login from "../pages/login";
import {firebase} from '../app/firebase';

  let numOfCart = 0;
  let isLoggedIn = false;

$(".cart").hover(
  function() { // mouse enters wrapper
    $(".cart-page").removeClass("hidden");
  },
  function() { // mouse leaves wrapper
    $(".cart-page").addClass("hidden");
  }
);

$("#app").on("click", ".coffee-buy", function (e) {
  e.preventDefault();

  alert("Added To Cart!");

  // update cart number
  numOfCart++;
  $(".cart-num").text(numOfCart);

  // get ID of clicked coffee
  const coffeeId = Number($(this).data("id"));
  console.log(coffeeId);

  $.getJSON("/data/data.json", (data) => {

    // find the correct item
    const cart = data.Coffee.find(item => item.id === coffeeId);
    if (!cart) return;

    // build cart HTML
    const cartHTML = `
      <div class="coffee-item" data-id="${cart.id}">
        <div class="coffee-img">
          <img src="${cart.coffeeImg}" alt="coffee">
        </div>
        <div class="cart-text">
          <div class="coffee-name"><p>${cart.coffeeName}</p></div>
          <div class="coffee-price">$${cart.price1}</div>
        </div>
      </div>
    `;

    // append to cart display
    $(".cart-coffee").append(cartHTML);
  });
});


$("#remove").on("click", function () {
  alert("Items Removed!");

  numOfCart = 0;
  $(".cart-num").text(numOfCart); 

  $(".cart-coffee").empty();
});

function initCoffee() {
    $.getJSON("/data/data.json", (data) => {
        console.log(data.Coffee);
//${books.cover_image}
        $.each(data.Coffee, (index, coffee) => {
            const coffeeHTML =`<div class="box">
              <div class="coffee-banner"><p>${coffee.coffeeBanner}</p></div>
              <div class="coffee-img">
              <img src="${coffee.coffeeImg}" alt="coffee"> </div>
              <div class="coffee-color"></div>
              <div class="coffee-name">
                <p>${coffee.coffeeName}</p>
              </div>
              <div class="coffee-price">
                <div class="top">
                  <h1>$${coffee.price1}</h1>
                  <p>with Keurig Starter Kit</p>
                </div>
                <div class="line"></div>
                <div class="bottom">
                  <h1>$${coffee.price2}</h1>
                  <p>Site Deal: ${coffee.siteDeal}</p>
                </div>
              </div>
              <div class="bottom"></div>
              <div class="coffee-reviews">
              <div class="star-icon"></div>
              <div class="star-icon"></div>
              <div class="star-icon"></div>
              <div class="star-icon"></div>
              <div class="star-icon"></div>
                <p>4.8 | (112)</p>
              </div>
              <div class="coffee-shiping">
                <p>Free shipping</p>
              </div>
              <div class="coffee-compare">
                <div class="check-box"></div>
                <p>Compare</p>
              </div>
              <div class="coffee-buy" data-id="${coffee.id}">

                <p>BUY NOW</p>
              </div>
            </div>`
        $(".coffee-makers").append(coffeeHTML);
        });
        
    });
}

function changeRoute() {
let hashTag = window.location.hash;
 let pageID = hashTag.replace('#', '');
console.log(hashTag + ' ' + pageID);

if (pageID != '') {
  if(pageID === "home"){
  $("#app").html(home)
  initCoffee();
  }
  if(pageID === "login"){
  $("#app").html(login)
  initLogin();
  initSignUp();
  firebase();
  }
  // if(pageID === "cart"){
  // $("#app").html(cart)
  // }

} else {
    $("#app").html(home)
    initCoffee();
}
}
function initLogin() {
  $("#login-btn").on("click", (e) => {
    e.preventDefault();
    
     alert("Logged In!");

    isLoggedIn = !isLoggedIn
   });
}

function initSignUp() {
  $("#sign-up-btn").on("click", (e) => {
    e.preventDefault();
    
     alert("Signed Up!");
    isLoggedIn = !isLoggedIn
   });
}

function initURLListener() {
$(window).on('hashchange', changeRoute);
changeRoute();
}
 
$(document).ready(function () {

initURLListener();
});


