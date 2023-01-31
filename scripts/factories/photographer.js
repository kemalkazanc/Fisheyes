function photographerFactory(data) {
    const { id, name, portrait, tagline, city, country, price,  } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
            article.classList = "card__card";
        const link = document.createElement('a');
            link.classList = "card__link";
            link.href = "/photographer.html?id=" + id ;
            link.setAttribute("role", "link");
        const img = document.createElement( 'img' );
            img.setAttribute("src", picture)
            img.classList = "card__image";
            img.setAttribute("alt", "");
            img.setAttribute("aria-describedby", "ouvrir le slider");
        const h2 = document.createElement( 'h2' );
            h2.textContent = name;
            h2.classList = "card__name"
        const p = document.createElement('p');
            p.textContent = city;
            p.classList = "card__city";
        const p1 = document.createElement('p');
            p1.textContent = country;
            p1.classList = "card__country";
        const cityAndName = document.createElement('p');
            cityAndName.textContent = city + ", " + country;
            cityAndName.classList = "card__cityAndCountry";
        const newP = document.createElement('p');
            newP.textContent = tagline;
            newP.classList = "card__info";
        const priceUser = document.createElement('p');
            priceUser.textContent = price + "€/jour";
            priceUser.classList = "card__price";
            //Avoir ici pour Le nom sur le formulaire
        //const namePhotographe = document.getElementById("title");
            // namePhotographe.textContent = name;
            // console.log(namePhotographe);

        link.appendChild(img);
        link.appendChild(h2);
        article.appendChild(link);
        article.appendChild(cityAndName);
        //article.appendChild(p);
        //article.appendChild(p1);
        article.appendChild(newP);
        article.appendChild(priceUser);
        return (article);
    }
    return { name, picture, getUserCardDOM }
}