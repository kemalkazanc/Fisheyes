//----------------------------------------------------------------------------
// SELECTION DES ÉLEMENT DU DOM
//----------------------------------------------------------------------------
const btnContact = document.getElementsByClassName("js-btn")[0];
const btnContactMobile = document.getElementsByClassName("js-btn2")[0];
const contactSection = document.getElementsByClassName("contact__section")[0];
const btnClose = document.getElementsByClassName("contact__btnClose")[0];
const modal = document.getElementById("contact__modal");
const btnSubmit = document.getElementById("submit");
const confirmMessage = document.getElementsByClassName("contact__confirmation")[0];

// const containerMessage = document.getElementsByClassName("js-containerMessage")[0];
// const containerModal = document.getElementsByClassName("js-containerModal")[0];

//----------------------------------------------------------------------------
// SELECTION DES INPUT
//----------------------------------------------------------------------------
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const emailName = document.getElementById("email");
const messageDescription = document.getElementById("message");

//----------------------------------------------------------------------------
// Variable Form Les variables représenter dans le input
//----------------------------------------------------------------------------
let first = "";
let name = "";
let email = "";
let message = "";

//----------------------------------------------------------------------------
// INITIALISATION DES VARIABLES À FALSE
//----------------------------------------------------------------------------
let isFirstNameValid = false;
let isLastNameValid = false;
let isEmailValid = false;
let isMessageDescriptionValid = false;
//----------------------------------------------------------------------------
// SELECTION DES MESSAGES D'ERREUR
//----------------------------------------------------------------------------
const firstNameError = document.querySelector(".js-firstNameError");
const lastNameError = document.querySelector(".js-lastNameError");
const emailError = document.querySelector(".js-emailError");
const messageError = document.querySelector(".js-messageError");

//----------------------------------------------------------------------------
// LES BOUTTONS DE LA MODALE
//----------------------------------------------------------------------------
// Btn contactez-moi Ajout de l'évènement
btnContact.addEventListener("click", () => displayModal());
btnContactMobile.addEventListener("click", () => displayModal());

// Btn Contactez-moi
function displayModal() {
    modal.style.visibility = "visible";
}

// Btn Close Modal
function closeModal() {
    modal.style.display = "none";
}

contactSection.addEventListener("keydown", function(e){
     if (e.key === 'Escape') {
         modal.style.display = 'none';
     }
});


//----------------------------------------------------------------------------
// L'ÉCOUTE DES INPUTS
//----------------------------------------------------------------------------
  firstName.addEventListener("input", (e) => {
    first = e.target.value;
    //console.log(e.target.value);
  })

  lastName.addEventListener("input", (e) => {
    name = e.target.value;
    //console.log(e.target.value);
  })

  emailName.addEventListener("input", (e) => {
    //console.log(e.target.value);
  })

  messageDescription.addEventListener("input", (e) => {
      //console.log(e.target.value);
  })

//----------------------------------------------------------------------------
// JE CRÉE LES FONCTIONS ET VÉRIFIE QUE LES CHAMPS REMPLIE LES CONDITIONS
//----------------------------------------------------------------------------
function checkFirstName () {
    if (first.length >= 2){
      firstNameError.classList.add("hidden");
      isFirstNameValid = true;
    } else if (first.length < 2){
      firstNameError.classList.remove("hidden");
      isFirstNameValid = false;
    }
  }

  // Fonction LastName
  function checkLastName () {
    if (name.length >= 2){
      lastNameError.classList.add("hidden");
      isLastNameValid = true;
    } else if (name.length < 2){
      lastNameError.classList.remove("hidden");
      isLastNameValid = false;
    }
  }
  // Fonction Email
  //regex email pour accepter les charactères spéciaux chiffres et lettre avant et après le @
  let regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  // fonction de vérification du champs email
  function checkEmail() {
    // console.log(emailName.value);
    // console.log(regexEmail.test(emailName.value))
    if (!emailName.value || !regexEmail.test(emailName.value) ) {
      // si le champs est vide message d'erreur
      emailError.classList.remove("hidden");
      isEmailValid = false;
    } else {
      //si tout est respecté pas de message d'erreur
      emailError.classList.add("hidden");
      isEmailValid = true;
    }
  }

  // Fonction message
  function checkMessage() {
    console.log("voir si msg ok ", messageDescription.value.length);
      if(messageDescription.value.length > 10 ) {
          messageError.classList.add("hidden");
          isMessageDescriptionValid = true;
          console.log("le message", messageDescription);
      } else {
        messageError.classList.remove("hidden");
        isMessageDescriptionValid = false;
      }
  }
//----------------------------------------------------------------------------
// APPEL DES FONCTIONS POUR VALIDER LE FORMULAIRE
// INITIALISATION DE TOUS LES CHAMPS DU FORMULAIRE
//----------------------------------------------------------------------------
function validForm(e) {
    e.preventDefault();
}

function modalGood() {
  console.log(confirmMessage);
  confirmMessage.style.visibility = "visible";
}

function InitialisationFields() {
    firstName.value = null;
    lastName.value = null;
    emailName.value = null;
    messageDescription.value = null;
    firstNameError.style.display = "none";
    lastNameError.style.display = "none";
    emailError.style.display = "none";
    messageError.style.display = "none";
}

// Btn Envoyer
btnSubmit.addEventListener("click" , (e) => {
    e.preventDefault();
    console.log("envoyer");
    checkFirstName();
    checkLastName();
    checkEmail();
    checkMessage();
    console.log("le prenom",isFirstNameValid);
    console.log("le nom",isLastNameValid);
    console.log("le email",isEmailValid);
    console.log("le message",isMessageDescriptionValid);
    if (
        isFirstNameValid &&
        isLastNameValid &&
        isEmailValid &&
        isMessageDescriptionValid
    ) {
      console.log("le console");
        modal.style.display = "none";
        modalGood();
        InitialisationFields();
    }
});

// Empêcher l'envoie du formulaire
contactSection.addEventListener("submit", (e) => {
  e.preventDefault();
})

