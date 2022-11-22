import './App.css';
import 'boxicons'
import { Header } from './components/Header';
import { ProdutosLista } from './components/Produtos';

function App() {
  return (
    <div className="App">
      <Header/>
      <h1>Hello Word</h1>
      <ProdutosLista/>
    </div>
  );
}

export default App;
