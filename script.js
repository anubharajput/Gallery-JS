const gallery = document.getElementById("gallery");
const prevBtn = document.getElementById("pre-btn");
const nextBtn = document.getElementById("next-btn");
const popupContainer = document.getElementById("img-container");
const popupImg = document.getElementById("display-img");
const backdropContainer = document.getElementById("empty-container");
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
const imgCard = document.querySelectorAll(".photo");
imgCard.forEach((e, index) => {
    e.addEventListener("click", () => {
        popupImg.src = e.src;
        slideIndex = index;
        popupContainer.style.display = "flex";
        backdropContainer.style.display = "block";
        hideShowBtn();
    })
})
const previousSlide = (e) => {
    slideIndex--;
    popupImg.src = imgCard[slideIndex].src;
    hideShowBtn();
}
const nextSlide = (e) => {
    slideIndex++;
    popupImg.src = imgCard[slideIndex].src;
    hideShowBtn();
}
const handleBackdrop = () => {
    popupContainer.style.display = "none";
    backdropContainer.style.display = "none";
}
const hideShowBtn = () => {
    if (slideIndex == 0) {
        prevBtn.style.visibility = "hidden";
        nextBtn.style.visibility = "visible";
    }
    else if (slideIndex == images.length - 1) {
        prevBtn.style.visibility = "visible";
        nextBtn.style.visibility = "hidden";
    }
    else {
        prevBtn.style.visibility = "visible";
        nextBtn.style.visibility = "visible";
    }
}
prevBtn.addEventListener("click", previousSlide);
nextBtn.addEventListener("click", nextSlide);
backdropContainer.addEventListener("click", handleBackdrop);
