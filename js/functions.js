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
// const images = ["./assets/images/product.webp","./assets/images/imagepart2.webp","./assets/images/imagepart3.webp","./assets/images/imagepart4.webp","./assets/images/imagepart2.webp","./assets/images/product.webp","./assets/images/imagepart2.webp","./assets/images/imagepart3.webp","./assets/images/imagepart4.webp","./assets/images/imagepart2.webp"];
const images = [
    {small:"./assets/images/product.webp",big:"./assets/images/product.webp"},
    {smal:"./assets/images/imagepart2.webp",big:"./assets/images/shirt1.webp"},
    {smal:"./assets/images/imagepart3.webp",big:"./assets/images/shirt2.webp"},
    {small:"./assets/images/imagepart4.webp",big:"/assets/images/shirt1.webp"},
    {small:"./assets/images/imagepart2.webp",big:"./assets/images/shirt2.webp"},
    {small:"./assets/images/product.webp",big:"/assets/images/shirt1.webp"},
    {small:"./assets/images/imagepart2.webp",big:"./assets/images/shirt2.webp"},
    {small:"./assets/images/imagepart3.webp",big:"/assets/images/shirt1.webp"},
    {small:"./assets/images/imagepart4.webp",big:"./assets/images/shirt2.webp"},
    {small:"./assets/images/product.webp",big:"/assets/images/shirt1.webp"},

]
// const mainImage = document.getElementById('main-image');
// const thumbnails = document.querySelectorAll('.thumbnail');
// const thumbnailsContainer = document.querySelector('.thumbnails-container');
// const prevArrow = document.querySelector('.left');
// const nextArrow = document.querySelector('.right');

// let currentIndex = 0;
// const updateGallery = (index) => {
//     currentIndex = index;
//     mainImage.src = images[currentIndex];
//     thumbnails.forEach((image, i) => {
//         image.classList.toggle('selected', i === currentIndex);
//         image.addEventListener('mouseover', () => {
//             image.classList.add('overlay')
//         })
//         image.addEventListener('mouseout', () => {
//             image.classList.remove('overlay')
//         })
//     })
// }
// const changethumbnailImage= (index)=>{
//     if(index === images.length){
//         index = images.length -1;
//     }
//     updateGallery(index)
// }
// thumbnails.forEach((image,i)=>{
//     image.addEventListener('click',(e)=>{
//         e.preventDefault();
//         updateGallery(i);
//     })
// })
// thumbnails[thumbnails.length - 1].addEventListener('click', () => {
//     updateGallery(images.length - 1)
// })
// nextArrow.addEventListener('click', (e) => {
//     e.preventDefault();
//     nextIndex = currentIndex + 1;
//     if (nextIndex >= images.length) {
//         nextIndex = 0;
//     }
//     updateGallery(nextIndex);
//     thumbnailsContainer.scrollTo({ left: nextIndex * thumbnails[0].offsetWidth, behavior: 'smooth' })
// })
// prevArrow.addEventListener('click', (e) => {
//     e.preventDefault();
//    let  prevIndex = currentIndex - 1;
//     if(prevIndex < 0){
//         prevIndex = images.length - 1;
//     }
//     updateGallery(prevIndex);
//     thumbnailsContainer.scrollTo({left:prevIndex * thumbnails[0].offsetWidth, behavior: 'smooth'})
// })
// thumbnails.forEach((image, i) => {
//     image.addEventListener('click', (e) => {
//         e.preventDefault();
//         updateGallery(i);
//         thumbnailsContainer.scrollTo({
//             left: i * thumbnails[0].offsetWidth, 
//             behavior: 'smooth'
//         });
//     });
// });
const mainImage = document.getElementById('main-image');
const thumbnailsContainer = document.querySelector('.thumbnails-container');
const prevArrow = document.querySelector('.left');
const nextArrow = document.querySelector('.right');

images.forEach((images,i)=>{
    const thumbnail = document.createElement('a');
    thumbnail.classList.add('thumbnail');
    thumbnail.href = images.big;
    thumbnail.innerHTML = `<img src="${images.smal}`
})