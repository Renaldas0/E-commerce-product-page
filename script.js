'use strict';

const avatar = document.querySelector('.avatar');
const basketSummary = document.querySelector('.basket-summary');
const productImg = document.querySelector('.product-img');
const productThumbnail = document.querySelector('.next-img');
const imageModal = document.querySelector('.image-modal');
const mainContainer = document.querySelector('.main-container');
const closeBtn = document.querySelector('.close-btn');
const itemQuantity = document.querySelector('.item-quantity');
const incrementBtn = document.querySelector('#increment');
const decrementBtn = document.querySelector('#decrement');
let itemQuantityValue = 0;
itemQuantity.innerHTML = itemQuantityValue;

avatar.addEventListener('click', () => {
    basketSummary.classList.toggle('visible');
});

productImg.addEventListener('click', () => {
    imageModal.style.display = ('flex');
    mainContainer.classList.add('overlay');
});

closeBtn.addEventListener('click', () => {
    imageModal.style.display = ('none');
    mainContainer.classList.remove('overlay');
})

incrementBtn.addEventListener('click', () => {
    if (itemQuantityValue === 99) {
        incrementBtn.disabled = true;
    } else {
        itemQuantityValue += 1;
        itemQuantity.innerHTML = itemQuantityValue;
    };
});

decrementBtn.addEventListener('click', () => {
    if (itemQuantityValue === 0) {
        decrementBtn.disabled = true;
    } else {
        itemQuantityValue -= 1;
        itemQuantity.innerHTML = itemQuantityValue;
    };
});