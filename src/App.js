import './App.css';
import Dictionary from './Dictionary';
import FooterContent from './FooterContent';

function App() {
  return (
    <div className="App">
      <div class="bg"></div>
      <div class="bg bg2"></div>
      <div class="bg bg3"></div>
      <main>
        <Dictionary />
      </main>
      <footer><FooterContent /></footer>
    </div>
  );
}

export default App;
