import React, { useEffect } from 'react';
import characters from '../data/characters.json';
import NumberOfCharacters from '../components/NumberOfCharacters';

const CharactersPage = () => {
  useEffect(() => {
    document.title = 'Characters - Marvel App';
  }, []);

  return (
    <div>
      <h2>Marvel Characters</h2>
      <NumberOfCharacters characters={characters} />
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default CharactersPage;