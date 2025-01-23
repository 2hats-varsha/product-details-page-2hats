const radioButton = document.querySelectorAll('input[name="color" ]');
const selectedColorSpan = document.getElementById('selectedColor') ;
radioButton.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        selectedColorSpan.textContent = event.target.value;
    });
  });

  // Select elements
const sizeChartButton = document.getElementById("sizeChartButton");
const modal = document.getElementById("popup");
const closeModalButton = document.getElementById("closeModalButton");
sizeChartButton.addEventListener("click", () => {
  modal.style.display = "flex";
});
closeModalButton.addEventListener("click", () => {
    debugger
  modal.style.display = "none";
});
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});
