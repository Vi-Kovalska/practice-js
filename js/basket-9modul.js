"use strict";
// 3) Працюємо зі сторінкою корзини. переходимо у файл /js/basket-9modul.js Переміщаємо дані з localStorage на сторінку html корзини
const totalPriceTitle = document.querySelector(".js-total-price");
const containerBasket = document.querySelector(".js-list-basket");
const clearBasketBtn = document.querySelector(".js-clear-btn");

 const LS_KEY = "basket";
let totalCostBasket;
const productsArr = JSON.parse(localStorage.getItem(LS_KEY)) || [];
// productsArr.length > 0 (якщо масив не порожній - додані товари)
if(productsArr.length){
// відображаєм кнопку очищення корзини
    clearBasketBtn.hidden = false;
}
// рахуєм заг суму товарів
totalCostBasket = productsArr.reduce((acc, {quantity, price}) => acc += quantity*price, 0);
// якщо сумма в булі тру (>0) відображаємо , якщо фолс - пишемо корзина пуста
totalPriceTitle.textContent = totalCostBasket ? `The total cost is ${totalCostBasket}$` : "The сart is empty";

// 4) Відмальовуєм обрані тьовари з масиву productsArr у корзині
function createMarkup(arr){
    return productsArr.map(({pic, price, quantity, name}) => `
    <li clas="cart-item">
    <img src="${pic}" alt="${name}" class="product-img">
    <h2>${name}</h2>
    <p>Quantity: ${quantity}</p>
    <p>Total price: ${quantity*price}</p>
    </li>
    `).join("");
}
containerBasket.insertAdjacentHTML("beforeend", createMarkup(productsArr));

// 
clearBasketBtn.addEventListener("click", handleClearBasket);
function handleClearBasket(event){
    containerBasket.innerHTML = "";
    localStorage.removeItem(LS_KEY);
    // повертаєм покупця на сторінку шопа
    window.location.href = "/index.html#shop"
}