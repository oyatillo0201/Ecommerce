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
  imgThumbnailActive: "img-showcase__thumbnail--active",
  siteHeaderCartModalOpen: 'site-header__cart-modal--open',
  lightboxOpen: 'lightbox--open',
};


// Shopping cart modal
const elSiteHeaderCartLink = document.querySelector('.js-site-header-cart-link');
const elSiteHeaderCartModal = document.querySelector('.site-header__cart-modal');

if(elSiteHeaderCartLink) {
  elSiteHeaderCartLink.addEventListener('click', function(evt) {
    evt.preventDefault();

    elSiteHeaderCartModal.classList.toggle(modifiers.siteHeaderCartModalOpen);

  })
}


// Image showcase
const elProductPageGallery = document.querySelector('.product-page__gallery');
const elImgShowcaseActiveImg = elProductPageGallery.querySelector('.img-showcase__active-img');
const elsImgShowcaseThumbnailButton = elProductPageGallery.querySelectorAll('.js-img-showcase-thumbnail-button');
const elsImgThumbnail = elProductPageGallery.querySelectorAll('.img-showcase__thumbnail');


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
  });
});


// LIGHTBOX
const elLightboxToggler = document.querySelector('.js-lightbox-toggler');
const elLightbox = document.querySelector('.lightbox');
const elLightboxClose = document.querySelector('.js-lightbox-close');


if(elLightboxToggler) {
  elLightboxToggler.addEventListener('click', function() {
    elLightbox.classList.add(modifiers.lightboxOpen);
  } )
}

if(elLightboxClose) {
  elLightboxClose.addEventListener('click', function() {
    elLightbox.classList.remove(modifiers.lightboxOpen);
  } )
}


// Thumbnail click
const elImgLightboxActiveImg = elLightbox.querySelector('.img-showcase__active-img');
const elsImgLightboxThumbnailButton = elLightbox.querySelectorAll('.js-img-lightbox-thumbnail-button');
const elsLightboxImgThumbnail = elLightbox.querySelectorAll('.img-showcase__thumbnail')


elsImgLightboxThumbnailButton.forEach(function(elButton) {
  elButton.addEventListener('click', function() {
    // Remove active state from all buttons
    elsLightboxImgThumbnail.forEach(function (elImgThumbnail) {
      elImgThumbnail.classList.remove(modifiers.imgThumbnailActive);
    });

    // Add active state to clicked button
    elButton.parentElement.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elButton.dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elButton.dataset.imgShowcaseBig} 1x, ${elButton.dataset.imgShowcaseRetina} 2x`;
    console.log(elButton.dataset)
  });
});


// LIGHTBOX CONTROL
const elLightboxControPrev = elLightbox.querySelector('.js-lightbox-control-prev');
const elLightboxControNext = elLightbox.querySelector('.js-lightbox-control-next');

if(elLightboxControNext) {
  elLightboxControNext.addEventListener('click', function() {
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    // Check if there are any elements after this element
    if(elActiveItem.nextElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[0];
      // elsLightboxImgThumbnail[0].classList.add(modifiers.imgThumbnailActive);
    }else {
      elNextActiveItem = elActiveItem.nextElementSibling;
      // elActiveItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig} 1x, ${elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseRetina} 2x`;
});
}

if(elLightboxControPrev) {
  elLightboxControPrev.addEventListener('click', function() {
    // Find active li element
    const elActiveItem = elLightbox.querySelector('.img-showcase__thumbnail--active');

    // Remove active li element's styles
    elActiveItem.classList.remove(modifiers.imgThumbnailActive);

    let elNextActiveItem;

    // Check if there are any elements after this element
    if(elActiveItem.previousElementSibling === null) {
      elNextActiveItem = elsLightboxImgThumbnail[elsLightboxImgThumbnail.length -1];
      // elsLightboxImgThumbnail[0].classList.add(modifiers.imgThumbnailActive);
    }else {
      elNextActiveItem = elActiveItem.previousElementSibling;
      // elActiveItem.nextElementSibling.classList.add(modifiers.imgThumbnailActive);
    }

    elNextActiveItem.classList.add(modifiers.imgThumbnailActive);

    // Update active image src accordingly
    elImgLightboxActiveImg.src = elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig;
    elImgLightboxActiveImg.srcset = `${elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseBig} 1x, ${elNextActiveItem.querySelector('.img-showcase__thumbnail-button').dataset.imgShowcaseRetina} 2x`;
});
}


const elProductQtyDecrementButton = document.querySelector('.js-product-quantity-decrement-button');
const elProductQtyIncrementButton = document.querySelector('.js-product-quantity-increment-button');
const elProductQty = document.querySelector('.product-info__quantity');

if(elProductQtyIncrementButton) {
  elProductQtyIncrementButton.addEventListener('click', function() {
    elProductQty.textContent = parseInt(elProductQty.textContent, 10) +1;
  } )
}

if(elProductQtyDecrementButton) {
  elProductQtyDecrementButton.addEventListener('click', function() {
const qty = parseInt(elProductQty.textContent, 10);

if(qty > 0) {
  elProductQty.textContent = qty -1 ;
}



  } )
}