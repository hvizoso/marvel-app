import './App.css'
import AboutPage from './pages/AboutPage';
import CharactersPage from './pages/CharactersPage';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div>
      <h1>Marvel App</h1>
      <CharactersPage />
      <AboutPage />
      <ContactPage />
    </div>
  );
}

export default App;