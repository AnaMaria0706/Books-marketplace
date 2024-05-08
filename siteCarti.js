let buttonState = false;
const button = document.getElementById('citesteMaiMult');
const continuare = document.getElementById('continuare');

function citesteDescrierea() {
  buttonState = !buttonState;
  if (buttonState) {
    button.textContent = 'Citeste mai putin';
    continuare.style.display = 'block';
  } else {
    button.textContent = 'Citeste mai mult';
    continuare.style.display = 'none';
  }
}
continuare.style.display = 'none';
  

  
  
  
