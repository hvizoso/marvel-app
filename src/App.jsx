import './App.css'
import characters from './data/characters.json';
import NumberOfCharacters from './components/NumberOfCharacters';

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
      <NumberOfCharacters characters={characters} />
    </div>
  );
}

export default App;