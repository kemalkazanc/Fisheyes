const btnContact = document.getElementsByClassName("photographer__button")[0];
const contactModal = document.getElementsByClassName("contact__modal");
const btnSubmit = document.getElementById("submit");
const btnClose = document.getElementsByClassName("contact__btnClose");
const namePhotographe = document.getElementById("title");
const alert = document.getElementsByClassName("contact__alert");

// Btn contactez-moi Ajout de l'évènement
btnContact.addEventListener("click", () => displayModal());

// Btn Contactez-moi
function displayModal() {
    const modal = document.getElementById("contact__modal");
    modal.style.display = "block";
    console.log("ouverture de la modal" , modal)
}

// Btn Close Modal
function closeModal() {
    const modal = document.getElementById("contact__modal");
    modal.style.display = "none";
}

//const btnClose = document.getElementsByClassName("contact__btnClose");
// btnClose.addEventListener("keydown", function(e){
//      if (e.key === 'Escape') {
//          const modal = document.getElementById("contact__modal");
//          modal.style.display = 'none';
//      }
// });
console.log("le btn close", btnClose);

// Btn Envoyer
btnSubmit.addEventListener("click" , (e) => {
    e.preventDefault();//méthode pour empêcher le rafraichissement de la page formulaire car pas de php
    console.log("click")
});


