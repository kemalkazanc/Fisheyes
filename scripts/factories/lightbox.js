const lightboxModal = document.querySelector(".lightbox__section");
const slideContainer = document.querySelector(".lightbox__containerSlides");
const closeBtn = document.querySelector(".lightbox__close");
const next = document.querySelector(".lightbox__right");
const previous = document.querySelector(".lightbox__left");
const titleMedia = document.querySelector(".lightbox__titreMedia");
// const mediaImg = document.createElement(".lightbox__img");
// const mediaVid = document.createElement(".lightbox__video");
const main = document.querySelector(".main");
const mainImg = document.getElementsByClassName("cardMedia__img");
//console.log(mainImg, "mainImg");



//Afficher l'image
for (let i = 0; i < mainImg.length; i++) {
    console.log(roro);
  }
for(const toto of mainImg){
    toto.addEventListener("click", () => {
        lightboxModal.style.display = "flex";
    })
}

// Button Fermer
closeBtn.addEventListener("click", () => {
    lightboxModal.style.display = "none";
})

