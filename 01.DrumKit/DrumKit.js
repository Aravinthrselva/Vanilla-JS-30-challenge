
window.addEventListener('keydown', playSound);
function playSound(evt) {
  console.log(`playSound evt log: `, evt)
    const audio = document.querySelector(`audio[data-key="${evt.keyCode}"]`);  // selecting an audio file (to play) from array of audio files with 9 elements
    const key = document.querySelector(`div[data-key="${evt.keyCode}"]`);      // selecting a div (for transition effects) from array of divs with 9 elements
    if (!audio) return;                                                        // exit the function is no matches are found

    key.classList.add('pressed');                                              //adding the class "pressed" to display the CSS transition effects

    //resets to 0 secs to allow the next audio to play instead of waiting for a longer audio file to end.
    audio.currentTime = 0;
    audio.play();
  }

  function removeTransition(evt) {
    console.log(`Remove Transition activated : `, evt)                         // we get back a lot of transition events (propertyName)s from CSS logged
    if(evt.propertyName !== 'transform') return;                               // exit the function if the reqd property "propertyName" isnt found
    evt.target.classList.remove('pressed')                                     // remove the class "pressed" to complete the transition-- evt has a property called target: div.key.pressed

  }

  const keys = document.querySelectorAll('.key');                             // selecting a collection of divs with the class of "key"

  for (let key of keys) {
    key.addEventListener('transitionend', removeTransition)                   //The transitionend event is fired when a CSS transition has completed
  }
