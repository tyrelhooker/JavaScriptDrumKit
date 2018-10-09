document.addEventListener('keydown', (event) => {
  console.log(event.keyCode);
  // if (`keys[data-key="${event.keycode}"`) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); // selects audio data key for sound
  // }
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);
    console.log(audio);
    if(!audio) return; // stop the function from running
    audio.currentTime = 0; // Allows key press multi sound
    audio.play(audio);
    key.classList.add('playing');
});

