import './App.css';
import NewProduct from './Components/Products/NewProduct';
import ProductDetails from './Components/Products/ProductDetails';
import Products from './Components/Products/Products';


function App() {
  return (
    <div className="App">
        <h1>Hello Team !</h1>
        <Products></Products>
        <NewProduct></NewProduct>
        <ProductDetails></ProductDetails>
    </div>
  );
}

export default App;
