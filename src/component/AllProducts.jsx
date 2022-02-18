import React, { useState, useEffect } from "react";
import styles from "./AllProducts.module.css";
import { useParams,useNavigate } from "react-router-dom";


function AllProducts() {
    let { id } = useParams();
    let navigate = useNavigate();

  const [product, setProduct] = useState([]);
  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    fetch("http://localhost:8000/posts")
      .then((response) => response.json())
      .then((data) => setProduct(data));
  };
  return (
    <div>
      <h1>All Products</h1>
      <div className={styles.mainDiv}>
        {product.map((e) => {
          return (
            <div key={e.id} className={styles.containerDiv}>
              <div>Product Name = {e.name}</div>
              <div>Product Price = {e.price}</div>
              <div>
                To know more, click <button onClick={()=>navigate(`/products/${e.id}`)}>More Details</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllProducts;
