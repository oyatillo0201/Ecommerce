let elLink = document.querySelector('.imgs__link');
let elModal = document.querySelector('.modal');

elLink.addEventListener('click', function() {
  elModal.classList.add('modal-open')
})


let elPrev = document.querySelector('.button-pilus');
let elNum = document.querySelector('.button-zero');
let elNext =document.querySelector('.button-minus');


elPrev.addEventListener('click', function() {
  // elNum.innerText = Number(elNum.innerText) +1;

  if(elNum.innerText == 20){
    elNum.innerText = 20
  } else {
    elNum.innerText = Number(elNum.innerText) +1;
  }
})



elNext.addEventListener('click', function() {
  // elNum.innerText = Number(elNum.innerText) -1;

  if(elNum.innerText == 0){
    elNum.innerText = 0
  } else{
    elNum.innerText = Number(elNum.innerText) -1;
  }

})