import Header from "./components/header/header";
import HomePage from "./pages/home-page/home-page";
import './index.css'
import { Routes, Route} from 'react-router-dom'
import HomePage2 from "./pages/home-page2/home-page2";
import ProductListing from "./pages/product-listing/product-listing";
import ProductListing2 from "./pages/product-listing2/product-listing2";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/"  element = {<HomePage/>}/>
        <Route path="page-two"  element = {<HomePage2/>}/>
        <Route path="product-listing"  element = {<ProductListing/>}/>
        <Route path="product-listing-two"  element = {<ProductListing2/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
