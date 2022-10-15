const inputs = document.querySelectorAll('.controls input');

function updateCss() {
  console.log(this.dataset);             //dataset is an object inside input nodelist prototype
  const suffix = this.dataset.size || ''; // 'base' that represents color doesnt have a suffix
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)

}
// adding eventListeners on each input for 'change' in value and realtime 'mousemove'
inputs.forEach(input => input.addEventListener('change', updateCss));
inputs.forEach(input => input.addEventListener('mousemove', updateCss));
