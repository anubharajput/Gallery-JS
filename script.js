const gallery = document.getElementById("gallery");
const preBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
const imgContainer = document.getElementById("img-container");
const displayImg=document.getElementById("display-img");
let slideIndex = 0;
const images = ["images/img1.jpg", "images/img2.jpg", "images/img3.jpg", "images/img4.jpeg", "images/img5.jpg", "images/img6.webp", "images/img7.webp",
    "images/img8.jpeg",
    "images/img9.jpg",
    "images/img10.jpeg",
    "images/img11.jpg",
    "images/img12.jpeg",
    "images/img13.jpeg",
    "images/img14.jpg",
    "images/img15.jpeg",
    "images/img16.jpeg",
    "images/img17.jpeg",
    "images/img18.jpeg",
    "images/img19.jpeg",
    "images/img20.jpeg",
    "images/img21.jpg",
    "images/img22.jpg",
    "images/img23.jpg",
    "images/img24.jpg"]
const imgCreator = () => {
    images.forEach((img, index) => {
        const image = document.createElement("img");
        image.src = images[index];
        image.classList.add("photo");
        gallery.appendChild(image);
    })
}
imgCreator();
const imgs=document.querySelectorAll(".photo");
imgs.forEach((e,index) => {
    e.addEventListener("click", () => {
        displayImg.src=e.src;
        slideIndex=index;
    })
})
const previousSlide = (e) => {
    slideIndex--;
    displayImg.src=imgs[slideIndex].src;
    
  }
  const nextSlide = (e) => {
    slideIndex++;
    displayImg.src=imgs[slideIndex].src;
  }

preBtn.addEventListener("click",previousSlide);
nextBtn.addEventListener("click",nextSlide);