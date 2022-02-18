import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import AllProducts from "./component/AllProducts";
import ProductDetails from "./component/ProductDetails";
import ErrorPage from "./component/ErrorPage";
function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/products">All Products</Link>
        {/* <Link to="/products:id">Product</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
