let infoPhotographer;
let infoMedia;
let totalLike = 0;

async function getPhotographers() {
    const queryString = window.location.search;

    const urlParams = new URLSearchParams(queryString);
    const photographerId = urlParams.get('id')
    //console.log(photographerId);

    // Penser à remplacer par les données récupérées dans le json
    //const title = document.createElement("article");
    let photographers = "";
    let mediaList = "";

    //On fait appel à notre JSON qui nous fait une promesse
    fetch("./data/photographers.json")
            // qui nous envoie une réponse pour nous dire si c'est ok
        .then(response => response.json())
            // Alors on accède au data
        .then(data => {
            //console.log(data)
            // Ici on stock toute les données des photographes
            photographers = data.photographers;
            //console.log(data)
            mediaList = data.media;
            //console.log("Kemal", photographers)
            if (photographers){
                //Ici on filtre le tableau avec l'id du photographe
                infoPhotographer = photographers.find(x => x.id == photographerId);
                //console.log("photographer", photographers)
            }
            if (mediaList) {
                infoMedia = mediaList.filter(x => x.photographerId == photographerId);
                //console.log("infoMedia", infoMedia);
                //console.log("notremsg" , mediaList)
            }
            //Ici on lance la fonction displayData avec le paramètre infophotographers afin qu'il soit executer
            displayData(infoPhotographer);

            infoMedia.sort((a, b) => b.likes - a.likes);
            for (var i = 0; i < infoMedia.length; i++) {
                displayMedia(infoMedia[i], i);
            }
        })
    // Et la il nous retourne le tableau photographers seulement une fois
    return infoPhotographer
}

//---------------------------------------------------------------------
// RECUPERATION DES DONNÉES
//---------------------------------------------------------------------
// Une promesse permet de créer des objets
// Async devant une fonction signifie une promesse qui s'auto Résous
function displayData(photographer) {
    //console.log("toto" ,photographer)
    const namePhotographer = document.querySelector(".photographer__infoName");
    const countryPhotographer = document.querySelector(".photographer__infoCountry");
    const tagPhotographer = document.querySelector(".photographer__infoTag");
    const imgPhotographer = document.querySelector(".js-imgPortrait");
    const picture = `assets/photographers/${photographer.portrait}`;
    const pricePhotographer = document.getElementsByClassName("photographer__numberPrice")[0];
    //console.log("essaie", priceDay);

    namePhotographer.textContent = photographer['name'];
    countryPhotographer.textContent = photographer ['city'] + ' , ' + [photographer.country];
    tagPhotographer.textContent = photographer['tagline'];
    imgPhotographer.setAttribute("src", picture);
    pricePhotographer.textContent = photographer['price'] + " € /Jour ";
    //console.log("essaie", pricePhotographer);
    const formName = document.querySelector(".contact__headerName");
            formName.textContent = photographer['name'];
            //console.log("qu'estceque", photographer.name);
}

//----------------------------------------------------------------------
// AFFICHER LE NOM DU PHOTOGRAPHE SUR LE FORMULAIRE
//----------------------------------------------------------------------



//----------------------------------------------------------------------
// RECUPERATION DES MEDIAS
//----------------------------------------------------------------------
function displayMedia(media, index) {
    //console.log("media", media)
    const galerieSection = document.getElementsByClassName("cardMedia__mediaGalerie")[0];
    const filter = document.createElement("div");
    filter.setAttribute("aria-label" , "" + media.title);
    filter.tabIndex = 0;

    // <video width="320" height="240" controls>
    //     <source src="movie.mp4" type="video/mp4">
    // </video>

        filter.classList = "cardMedia__filter";
        let imgMedia = "";
        let isImg = "";
    if(media.image){
        isImg = true;
        imgMedia = document.createElement("img");
        imgMedia.classList = "cardMedia__img";
        imgMedia.setAttribute("src", "../../assets/picture/"+ media.image);
        //imgMedia.setAttribute("aria-label" , "" + media.title);
    } else {
        imgMedia = document.createElement("video");
        imgMedia.setAttribute("src", "../../assets/picture/"+ media.image);
        imgMedia.classList = "cardMedia__img";
        imgMedia.setAttribute("src", "../../assets/picture/"+ media.video);//voir pour la video laisser le css
        imgMedia.setAttribute("autoplay", "true");
        imgMedia.setAttribute("alt" , "" + media.video);
    }
    imgMedia.dataset.currentIndex = index;
    const mediaFooter = document.createElement("div");
        mediaFooter.classList = "cardMedia__mediaFooter";
    const titleContenu = document.createElement("p");
        titleContenu.classList = "cardMedia__titleContenu";
        titleContenu.textContent = media.title;
        titleContenu.tabIndex = 0;
    const footerLike = document.createElement("div");
        footerLike.classList = "cardMedia__footerLike";
    const compteurLike = document.createElement("p");
        compteurLike.classList = "cardMedia__compteurLike";
        compteurLike.textContent = media.likes;
        compteurLike.setAttribute("aria-label", "nombre de likes " + media.likes);
        compteurLike.tabIndex = 0;
    const btnLike = document.createElement("button");
        btnLike.classList = "cardMedia__like";
        btnLike.textContent = media.like;
        btnLike.setAttribute("aria-label", "button likes")
    const heart = document.createElement("i");
        heart.classList = "cardMedia__heart";
        heart.classList = "far fa-heart";

    btnLike.addEventListener("click", (e)=> {
        compteurLikeImg(e.currentTarget);
        heart.classList.toggle("fas")
    })

    //console.log(imgMedia);
    imgMedia.addEventListener("click", (e) => {
        openLightbox(e, isImg);
    })

    filter.appendChild(imgMedia);
    mediaFooter.appendChild(titleContenu);
    filter.appendChild(mediaFooter);
    mediaFooter.appendChild(footerLike);
    footerLike.appendChild(compteurLike);
    footerLike.appendChild(btnLike);
    btnLike.appendChild(heart);
    galerieSection.appendChild(filter);

    totalLike += media.likes;
    //console.log(totalLike);
    document.getElementById("numberOfLike").textContent = totalLike;

}

//----------------------------------------------------------------------
// TOTAL LIKE
//----------------------------------------------------------------------
// const totalCoeur = document.getElementsByClassName("cardMedia__compteurLike");
function compteurLikeImg(btnLike) {
    //console.log(btnLike);
    const nbLike = btnLike.parentElement.getElementsByClassName("cardMedia__compteurLike")[0].textContent;
    //console.log(nbLike);
    const totalLikePhotographer = document.getElementById("numberOfLike").textContent;

    if (btnLike.classList.contains("active")){
        const newNbLike = parseInt(nbLike)-1;
        //console.log(newNbLike);
        btnLike.parentElement.getElementsByClassName("cardMedia__compteurLike")[0].textContent = newNbLike;
        btnLike.classList.remove("active");

        const newtotalLikePhotographer = parseInt(totalLikePhotographer)-1;
        document.getElementById("numberOfLike").textContent= newtotalLikePhotographer;

    } else {
        const newNbLike = parseInt(nbLike)+1;
        //console.log(newNbLike);
        btnLike.parentElement.getElementsByClassName("cardMedia__compteurLike")[0].textContent = newNbLike;
        btnLike.classList.add("active");
        const newtotalLikePhotographer = parseInt(totalLikePhotographer)+1;
        document.getElementById("numberOfLike").textContent= newtotalLikePhotographer;
    }
}
//----------------------------------------------------------------------
// OPEN LIGHTBOX
//----------------------------------------------------------------------
let currentIndex = "";
function openLightbox(e, isImg) {
    currentIndex = e.target.dataset.currentIndex;
    const lightboxModal = document.getElementsByClassName("lightbox__section")[0];
    const currentImg = e.target.src;
    const videoContainer = document.getElementsByClassName("lightbox__videoContainer")[0];
    const imgLightboxContainer = document.getElementsByClassName("lightbox__img")[0];
    //console.log("kemal", currentImg);
    lightboxModal.style.display = "block";

    let imgContainer = "";
    if(isImg === true){
        imgContainer = document.getElementsByClassName("lightbox__img")[0];
        imgLightboxContainer.classList.remove("hidden");
        videoContainer.classList.add("hidden");
    } else {
        imgContainer = document.getElementsByClassName("lightbox__videoContainer")[0];
        imgLightboxContainer.classList.add("hidden");
        videoContainer.classList.remove("hidden");
    }
    console.log(imgContainer);
    imgContainer.setAttribute("src", currentImg);

    const title = e.target.parentElement.getElementsByClassName("cardMedia__titleContenu")[0].textContent;
    console.log("title", title);
    const titleImg = document.getElementsByClassName("lightbox__titreMedia")[0];
    titleImg.textContent = title;
}

//----------------------------------------------------------------------
// SLIDE IMAGE LIGHTBOX
//----------------------------------------------------------------------
// Ici on creer deux constante afin qu'on puisse se déplacer
// dans les index des tableaux
const left = document.getElementsByClassName("lightbox__left")[0];
const right = document.getElementsByClassName("lightbox__right")[0];


left.addEventListener("click", (e) => {
    console.log("currentIndex", currentIndex);
    if (currentIndex > 0)
    {
        slideImage((-1));
    }
})

right.addEventListener("click", (e) =>{
    console.log("currentIndex", currentIndex);
    console.log(infoMedia.length);
    if(currentIndex < infoMedia.length - 1) {
        slideImage(1);
    }
})

//Fonction qui permet de changer d'image
function slideImage(direction){
    //console.log(direction);
    const newIndex = parseInt(currentIndex)+direction;
    //currentIndex est l'index de la photo dans le tableau
    currentIndex = newIndex;
    console.log("toto", currentIndex)

    //Info media est mon tableau de photo
    console.log(infoMedia[newIndex], "le dataset");
    console.log("info media", infoMedia);

    //Mon if/ else en une seule ligne (un ternaire)
    let isImg = infoMedia[newIndex].image ? true : false;
    let imgContainer = "";
    let srcImg = ""
    const videoContainer = document.getElementsByClassName("lightbox__videoContainer")[0];
    const imgLightboxContainer = document.getElementsByClassName("lightbox__img")[0];

    if(isImg === true){
        imgContainer = document.getElementsByClassName("lightbox__img")[0];
        srcImg = infoMedia[newIndex].image;
        videoContainer.classList.add("hidden");
        imgLightboxContainer.classList.remove("hidden");
    } else {
        imgContainer = document.getElementsByClassName("lightbox__videoContainer")[0];
        srcImg = infoMedia[newIndex].video;
        videoContainer.classList.remove("hidden");
        imgLightboxContainer.classList.add("hidden");
    }
    imgContainer.setAttribute("src", "../../assets/picture/" + srcImg);
    //imgContainer.setAttribute("src", "../../assets/picture/"+ media.video);

    const title = infoMedia[newIndex].title;
    const titleImg = document.getElementsByClassName("lightbox__titreMedia")[0];
    titleImg.textContent = title;
}

//----------------------------------------------------------------------
// Button de navigation
//----------------------------------------------------------------------
document.addEventListener("keypress", (e) => {
    //console.log(e);
})

const lightboxCommande = document.getElementsByClassName("lightbox__section")[0];
//visé la lightbox
lightboxCommande.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        console.log("La touche échap appuyée");
        const lightboxModal = document.querySelector(".lightbox__section");
        lightboxModal.style.display = "none";
    }
    if (event.key === "ArrowLeft") {
      console.log("Flèche gauche appuyée");
      if (currentIndex > 0)
    {
        slideImage((-1));
    }
    }
    if (event.key === "ArrowRight") {
        console.log("Flèche de droite appuyée")
        if(currentIndex < infoMedia.length - 1) {
            slideImage(1);
        }
    }
  });

//----------------------------------------------------------------------
// FILTRE IMAGE
//----------------------------------------------------------------------
const filterPopulaire = document.getElementById("Popularite");
const filterDate = document.getElementById("Date");
const filterTitre = document.getElementById("Titre");


filterPopulaire.addEventListener("click", (e) =>{
    filterMedia(e.target);
})

filterDate.addEventListener("click", (e) =>{
    filterMedia(e.target);
})
filterTitre.addEventListener("click", (e) =>{
    filterMedia(e.target);
})

function filterMedia (data){
    totalLike = 0;
    document.getElementById("numberOfLike").textContent = "0";
    console.log(data.id);
    let newMedia = "";
    if(data.id == "Titre"){
         newMedia = infoMedia.sort((a, b) => a.title.localeCompare(b.title));
    }else if(data.id == "Date") {
        newMedia = infoMedia.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else{
        newMedia = infoMedia.sort((a, b) => b.likes - a.likes);
    }
    console.log(newMedia);

    const cardFilter = document.getElementsByClassName("cardMedia__mediaGalerie")[0];

    cardFilter.innerHTML = "";
    for (var i = 0; i < newMedia.length; i++) {
        displayMedia(newMedia[i], i);
    }

}

async function init() {
    // Récupère les datas des photographes
    // Await signifie qu'on attend le résultat // tu ne passe pas à la suite
     await getPhotographers();
}


init();









