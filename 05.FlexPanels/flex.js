const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');

}

// Two transition properties are triggered as per our open class in css, but we need to check just one
 function toggleActive(e) {
  console.log(e.propertyName);
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }

}

// adding event listeners to all panel items

for(let panel of panels) {
  panel.addEventListener('click', toggleOpen);
// when the toggleOpen transition ends , the next next class is added
  panel.addEventListener('transitionend', toggleActive);
}
