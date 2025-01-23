const radioButton = document.querySelectorAll('input[name="color" ]');
const selectedColorSpan = document.getElementById('selectedColor') ;
radioButton.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        selectedColorSpan.textContent = event.target.value;
    });
  });