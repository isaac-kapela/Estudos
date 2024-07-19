document.addEventListener("DOMContentLoaded", function () {
    function ajaxCaracter() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://rickandmortyapi.com/api/character', true);
        xhr.onload = function () {

            const dado = JSON.parse(xhr.responseText);
            const personagens = document.getElementById("ListaPersonagens");
            dado.results.forEach(function (personagem) {
                const ItemLista = document.createElement("li");
                const img = document.createElement("img");
                img.src = personagem.image;
                img.alt = personagem.name;
                img.style.width = "50px";
                ItemLista.textContent = `O nome do personagem é ${personagem.name}, está ${personagem.status}, e é da espécie ${personagem.species}`;
                ItemLista.appendChild(img);
                personagens.appendChild(ItemLista);
            });

        };

        xhr.send();
    }

    function ajaxEpisodio() {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://rickandmortyapi.com/api/episode', true);
        xhr.onload = function () {
            const dado = JSON.parse(xhr.responseText);
            const episodios = document.getElementById("ListaEpisodios");
            dado.results.forEach(function (episodio) {
                const ItemLista = document.createElement("li");
                ItemLista.textContent = `O nome do episódio é ${episodio.name}, é o episódio ${episodio.episode}, e foi ao ar em ${episodio.air_date}`;
                episodios.appendChild(ItemLista);
            });

        };

        xhr.send();
    }

    ajaxCaracter();
    ajaxEpisodio();
});
