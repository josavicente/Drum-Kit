


function play(e){
      console.log(this);
      const audio = document.querySelector(`audio[data-key="${e.key}"]`);
      const key = document.querySelector(`.key[data-key="${e.key}"]`);
      /* Saying if there is no audio, stop the function from running. */
      if(!audio) return;
      /* Saying that if the key is pressed again, it will play the sound again. */
      audio.currentTime = 0;
      audio.play();
      key.classList.add('playing');
      console.log(key);
}

function removeTransition(e){
      if (e.propertyName !== 'transform') return;
      this.classList.remove('playing');
}

console.log(this);
const keys = document.querySelectorAll('.key');
console.log(keys);
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', play); 

