import './App.css';
import { Header } from './components/Header/index_header.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProdutosLista } from './components/Produtos/index_produtos';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <ProdutosLista/>
      </Router>
    </div>
  );
}

export default App;
