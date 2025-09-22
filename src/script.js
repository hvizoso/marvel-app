
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


// Appel de l'API et affichage dans la console
function loadCharacters() {
    getCharacters().then(characters => {
        console.log('Personnages Marvel récupérés:', characters);
        console.log('Nombre de personnages:', characters.length);
    });
}

// Attendre que le DOM soit chargé avant d'appeler la fonction
document.addEventListener('DOMContentLoaded', loadCharacters);