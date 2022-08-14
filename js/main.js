// let elLink = document.querySelector('.imgs__link');
// let elModal = document.querySelector('.modal');

// elLink.addEventListener('click', function() {
//   elModal.classList.add('modal-open')
// })


// let elPrev = document.querySelector('.button-pilus');
// let elNum = document.querySelector('.button-zero');
// let elNext =document.querySelector('.button-minus');


// elPrev.addEventListener('click', function() {
//   // elNum.innerText = Number(elNum.innerText) +1;

//   if(elNum.innerText == 20){
//     elNum.innerText = 20
//   } else {
//     elNum.innerText = Number(elNum.innerText) +1;
//   }
// })



// elNext.addEventListener('click', function() {
//   // elNum.innerText = Number(elNum.innerText) -1;

//   if(elNum.innerText == 0){
//     elNum.innerText = 0
//   } else{
//     elNum.innerText = Number(elNum.innerText) -1;
//   }

// })



const modifiers = {
  imgThumbnailActive: "img-showcase__thumbnail--active"
};


// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if(elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle('site-header__cart-modal--open');

  })
}


// Image showcase
const elImgShowcaseActiveImg = document.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = document.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = document.querySelectorAll('.img-showcase__thumbnail')

elsImgShowcaseThumbnailButton.forEach(function(elButton) {
  elButton.addEventListener('click', function() {
    // Remove active state from all buttons
    elsImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });

    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgShowcaseActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgShowcaseActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    console.log(elButton.dataset)
  });
});