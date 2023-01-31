const btnContact = document.getElementsByClassName("photographer__button")[0];
const contactModal = document.getElementsByClassName("contact__modal");
const btnSubmit = document.getElementById("submit");
const namePhotographe = document.getElementById("title");


// Btn contactez-moi Ajout de l'évènement
btnContact.addEventListener("click", () => displayModal());

// Btn Contactez-moi
function displayModal() {
    const modal = document.getElementById("contact__modal");
    modal.style.display = "block";
    console.log("test modal" , modal)
}

// Btn Close Modal
function closeModal() {
    const modal = document.getElementById("contact__modal");
    modal.style.display = "none";
}

// Btn Envoyer
btnSubmit.addEventListener("click" , (e) => {
    e.preventDefault();//méthode pour empêcher le rafraichissement de la page formulaire car pas de php
    console.log("click")
})