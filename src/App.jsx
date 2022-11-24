import './App.css';
import { Header } from './components/Header/index_header.jsx';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProdutosLista } from './components/Produtos/index_produtos';
import { Administrador } from './pages/Administrador';

function App() {
  return (
    <div className="App">
      <Router>
      <Header/>
      <Administrador/>
      </Router>
    </div>
  );
}

export default App;
