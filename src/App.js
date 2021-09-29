import './App.css';
import Dictionary from './Dictionary';
import FooterContent from './FooterContent';

function App() {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <header className="App-header">
        Dictionary for you <img src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/000000/external-book-back-to-school-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="" /><img src="https://img.icons8.com/office/60/000000/anime-emoji.png" alt=""/>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer><FooterContent /></footer>
    </div>
  );
}

export default App;
