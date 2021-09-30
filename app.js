const wavesImg = document.getElementById('waves-image');
const wavesSound = document.getElementById('waves');
const fireImg = document.getElementById('fire-image');
const fireSound = document.getElementById('fire');
const rainImg = document.getElementById('rain-image');
const rainSound = document.getElementById('rain');


wavesImg.addEventListener('click', ()=>{
  wavesSound.play();
});

fireImg.addEventListener('click', ()=>{
  fireSound.play();
});

rainImg.addEventListener('click', ()=>{
  rainSound.play();
});

window.addEventListener('keydown', (event)=> {
  if (event.key === 'w') {
    waveSound.play();
  }
  if (event.key === 'f') {
    fireSound.play();
  }
  if (event.key === 'r') {
    rainSound.play();
  }
})