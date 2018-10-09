document.addEventListener('keydown', (event) => {
  // selects audio data key for sound
  const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); 
  const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
  console.log(key);
  if(!audio) return; // stop the function from running
  audio.currentTime = 0; // Allows key press multi sound
  key.classList.add('playing');
});

function removeTransition(event) {
  console.log(event);
}

// const keys = document.querySelectorAll('.key');
// keys.forEach(key => key.addEventListener('transitionend', removeTransition));