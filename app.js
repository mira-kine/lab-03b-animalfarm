const horseImg = document.getElementById('horse-image');
const horseSound = document.getElementById('horse');
const dogImg = document.getElementById('dog-image');
const dogSound = document.getElementById('dog');
const catImg = document.getElementById('cat-image');
const catSound = document.getElementById('cat');


horseImg.addEventListener('click', ()=>{
  horseSound.play();
});

dogImg.addEventListener('click', ()=>{
  dogSound.play();
});

catImg.addEventListener('click', ()=>{
  catSound.play();
});

window.addEventListener('keydown', (event)=> {
  if (event.key === 'h') {
    horseSound.play();
  }
  if (event.key === 'd') {
    dogSound.play();
  }
  if (event.key === 'c') {
    catSound.play();
  }
})