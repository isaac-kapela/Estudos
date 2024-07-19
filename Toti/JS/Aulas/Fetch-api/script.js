document.addEventListener("DOMContentLoaded", function() {
    function fetchCharacters() {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => {
                const personagens = document.getElementById("ListaPersonagens");
                data.results.forEach(personagem => {
                    const ItemLista = document.createElement("li");
                    const img = document.createElement("img");
                    img.src = personagem.image;
                    img.alt = personagem.name;
                    img.style.width = "50px"; 
                    ItemLista.textContent = `O nome do personagem é ${personagem.name}, está ${personagem.status}, e é da espécie ${personagem.species} `;
                    ItemLista.appendChild(img);
                    personagens.appendChild(ItemLista);
                });
            })
            .catch(error => console.error('Erro ao buscar personagens:', error));
    }

        

    function fetchEpisodes() {
        fetch('https://rickandmortyapi.com/api/episode')
            .then(response => response.json())
            .then(data => {
                const episodios = document.getElementById("ListaEpisodios");
                data.results.forEach(episodio => {
                    const ItemLista = document.createElement("li");
                    ItemLista.textContent = `O nome do episódio é ${episodio.name}, é o episódio ${episodio.episode}, e foi ao ar em ${episodio.air_date}`;
                    episodios.appendChild(ItemLista);
                });
            })
            .catch(error => console.error('Erro ao buscar episódios:', error));
    }

    fetchCharacters();
    fetchEpisodes();
});
