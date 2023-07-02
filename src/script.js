// Fonction pour récupérer la liste des personnages depuis l'API
async function getCharacters() {
    try {
      const response = await fetch('https://character-database.becode.xyz/characters');
      const data = await response.json();
      return data;
    } catch (error) {
      console.log('Erreur lors de la récupération des personnages :', error);
    }
  }
  
  // Fonction pour afficher la liste des personnages dans la page
  function displayCharacters(characters) {
    const charactersList = document.getElementById('characters-list');
  
    characters.forEach(character => {
      const characterCard = document.createElement('div');
      characterCard.classList.add('card', 'mb-3');
  
      const characterImage = document.createElement('img');
      characterImage.classList.add('card-img-top');
      characterImage.src = character.image;
  
      const characterCardBody = document.createElement('div');
      characterCardBody.classList.add('card-body');
  
      const characterName = document.createElement('h5');
      characterName.classList.add('card-title');
      characterName.textContent = character.name;
  
      const characterDescription = document.createElement('p');
      characterDescription.classList.add('card-text');
      characterDescription.innerHTML = character.description;
  
      characterCardBody.appendChild(characterName);
      characterCardBody.appendChild(characterDescription);
  
      characterCard.appendChild(characterImage);
      characterCard.appendChild(characterCardBody);
  
      charactersList.appendChild(characterCard);
    });
  }
  
  // Fonction d'initialisation pour afficher la liste des personnages
  async function init() {
    const characters = await getCharacters();
    displayCharacters(characters);
  }
  
  // Appel de la fonction d'initialisation au chargement de la page
  window.onload = init;