const radioButton = document.querySelectorAll('input[name="color" ]');
const selectedColorSpan = document.getElementById('selectedColor') ;
radioButton.forEach((radio) => {
    radio.addEventListener('change', (event) => {
        selectedColorSpan.textContent = event.target.value;
    });
  });
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
const search = document.querySelector('icon-Search');
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' || event.key === 'F') {
    console.log("dd");
const searchInput = document.getElementById('search');
searchInput.focus(); 
searchInput.select(); 
    }})
    
   
// slider
const images = ["./assets/images/product.webp","./assets/images/imagepart2.webp","./assets/images/imagepart3.webp","./assets/images/imagepart4.webp","./assets/images/imagepart2.jpg"];

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');

let currentIndex = 0;
const updateGallery = (index) => {
    currentIndex = index;
    mainImage.src = images[currentIndex];
    thumbnails.forEach((image, i) => {
        image.classList.toggle('selected', i === currentIndex);
        image.addEventListener('mouseover', () => {
            image.classList.add('overlay')
        })
        image.addEventListener('mouseout', () => {
            image.classList.remove('overlay')
        })
    })
}
const changethumbnailImage= (index)=>{
    if(index === images.length){
        index = images.length -1;
    }
    updateGallery(index)
}
thumbnails.forEach((image,i)=>{
    image.addEventListener('click',()=>{
        updateGallery(i)
    })
})
thumbnails[thumbnails.length - 1].addEventListener('click', () => {
    updateGallery(images.length - 1)
})
const nextButton = ()=>{
    nextIndex = currentIndex +1;
    if(nextIndex >= images.length){
        nextIndex=0;
    }
    updateGallery(nextIndex);
}
const prevButton = ()=>{
    debugger
    prevIndex = currentIndex -1;
    if(prevIndex < 0){
        prevIndex =0;
    }
    updateGallery(prevIndex);
}