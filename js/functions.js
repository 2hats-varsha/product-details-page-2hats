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

const mainImage = document.getElementById('main-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
const prevArrow = document.querySelector('.left');
const nextArrow = document.querySelector('.right');

let currentIndex = 0;
const updateGallery = (index) => {
    currentIndex = index;
    const thumbnailImage = thumbnails[currentIndex].querySelector('img');
    mainImage.src = thumbnailImage.src;

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
thumbnails.forEach((image,i)=>{
    image.addEventListener('click',(e)=>{
        e.preventDefault();
        updateGallery(i);
    })
})
const changethumbnailImage= (index)=>{
    if(index === images.length){
        index = images.length -1;
    }
    updateGallery(index)
}
thumbnails[thumbnails.length - 1].addEventListener('click', () => {
    updateGallery(images.length - 1)
})
nextArrow.addEventListener('click', (e) => {
    e.preventDefault();
    nextIndex = currentIndex + 1;
    updateGallery(nextIndex);
    thumbnailsContainer.scrollTo({ left: nextIndex *  (thumbnails[0].offsetWidth + 20), behavior: 'smooth' })
})
prevArrow.addEventListener('click', (e) => {
    e.preventDefault();
   let  prevIndex = currentIndex - 1;
    updateGallery(prevIndex);
    thumbnailsContainer.scrollTo({left:prevIndex *  thumbnails[0].offsetWidth - 24, behavior: 'smooth'})
})
thumbnails.forEach((image, i) => {
    image.addEventListener('click', (e) => {
        e.preventDefault();
        updateGallery(i);
        thumbnailsContainer.scrollTo({
            left: i * thumbnails[0].offsetWidth , 
            behavior: 'smooth'
        });
    });
});

