
// Récupère les personnages Marvel depuis l'API
function getCharacters() {
    return fetch('http://localhost:3000/data/characters.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors du chargement des personnages');
            }
            return response.json();
        })
        .catch(error => {
            console.error('Erreur:', error);
            return [];
        });
}


// Appel de l'API et modification du contenu de la liste
function loadCharacters() {
    getCharacters().then(characters => {
        console.log('Personnages Marvel récupérés:', characters);
        console.log('Nombre de personnages:', characters.length);
        
        // Récupérer la liste ul
        const charactersList = document.getElementById('characters');
        
        if (charactersList) {
            // Vider la liste existante
            charactersList.innerHTML = '';
            
            // Ajouter chaque personnage à la liste
            characters.forEach(character => {
                const li = document.createElement('li');
                li.textContent = character.name;
                li.setAttribute('data-id', character.id);
                charactersList.appendChild(li);
            });
        }
    });
}

// Attendre que le DOM soit chargé avant d'appeler la fonction
document.addEventListener('DOMContentLoaded', loadCharacters);