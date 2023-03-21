    async function getPhotographers() {
        // Penser à remplacer par les données récupérées dans le json
        // const title = document.createElement("article");
        let photographers = "";

        //On fait appel à notre JSON qui nous fait une promesse
        fetch("./data/photographers.json")
                // qui nous envoie une réponse pour nous dire si c'est ok
            .then(response => response.json())
                // Alors on accède au data
            .then(data => {
                console.log(data)
                // Ici on stock toute les données des photographes
                photographers = data.photographers;
                console.log("photographer", photographers)
                //Ici on lance la fonction displayData avec le paramètre photographers
                displayData(photographers);
            })

        // et bien retourner le tableau photographers seulement une fois
        return photographers
    }

    // Une promesse permet de créer des objets
    // Async devant une fonction signifie une promesse qui s'auto Résous
    function displayData(photographers) {
        const photographersSection = document.querySelector(".card__section");

        photographers.forEach((photographer) => {
            const photographerModel = photographerFactory(photographer);
            const userCardDOM = photographerModel.getUserCardDOM();
            photographersSection.appendChild(userCardDOM);
        });
    }

    async function init() {
        // Récupère les datas des photographes
        // Await signifie qu'on attend le résultat // tu ne passe pas à la suite
         await getPhotographers();
    }

    init();
