import './App.css';
import { Header } from './components/Header/index';
import { BrowserRouter as Router } from 'react-router-dom'
import { ProdutosLista } from './components/Produtos';
import { DataProvider } from './context/DataProvider'
import { Carrinho } from './components/Carrinho';

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Router>
      <Header/>
      <Carrinho/>
      <ProdutosLista/>
      </Router>
    </div>
    </DataProvider>
  );
}

export default App;
