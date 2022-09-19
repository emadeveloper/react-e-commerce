import './App.css';
import ItemListContainer from './components/ItemListContainer';
import NavBar from './components/navbar';

function App() {
  return (
    <>
    <NavBar />
    <ItemListContainer texto='Tienda E-Commerce' />
    </>
  );
}

export default App;
