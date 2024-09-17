document.addEventListener("DOMContentLoaded", (event) => {

    let data = [];

    fetch("./card.json", {
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(res => {
            for (let i = 0; i < res.length; i++) {
                data.push({
                    name: res[i].name,
                    pitch: res[i].pitch,
                    cost: res[i].cost,
                    power: res[i].power,
                    defense: res[i].defense,
                    health: res[i].health,
                    image_url: res[i].printings[0].image_url,
                })
            }
            for (let i = 0; i < 5; i++) {
                let random = Math.floor(Math.random() * data.length);
                let randomCard = data[random];

                    let card_main = document.createElement('div');
                    card_main.setAttribute("class", "border-2 rounded-2xl m-4 p-2 hover:scale-150");
                    card_main.innerHTML = `<img src="${randomCard.image_url}" loading="lazy">`;
                    carte.appendChild(card_main);
            }
            for (let e = 0; e < 5; e++) {
                let random_enemi = Math.floor(Math.random() * data.length);
                let randomCard_enemi = data[random_enemi];

                    let card_main_enemi = document.createElement('div');
                    card_main_enemi.setAttribute("class", "border-2 rounded-2xl m-4 p-2 hover:scale-150 ");
                    card_main_enemi.innerHTML = `<img src="${randomCard_enemi.image_url}" loading="lazy">`;
                    carte_enemi.appendChild(card_main_enemi);
                console.log(data)
            }
            function moveToPlateau(cardElement) {
                let plateau = document.getElementById('plateau');
                plateau.appendChild(cardElement);  // Déplacer la carte vers le plateau
                cardElement.classList.remove("hover:scale-150");  // Retirer l'effet hover
        
                // Supprimer la carte de la main (en la supprimant de l'endroit d'origine)
                carte.removeChild(cardElement);
            }


        })
})
