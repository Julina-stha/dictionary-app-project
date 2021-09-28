import './App.css';
import Dictionary from './Dictionary';
import FooterContent from './FooterContent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <Dictionary />
      </main>
      <footer><FooterContent /></footer>
    </div>
  );
}

export default App;
