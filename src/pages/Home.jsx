import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  console.log("los", products);

  return (
    <div className="container--card">
      {products.map((product) => (
        <div className="card-">
          <Link to={`/products/${product.id}`}>
            <div className="container-image">
              <img src={product.productImgs[0]} alt="" />
            </div>

           <div className="description">
           <strong>{product.title}</strong>

           <p><b>Price</b></p>
           <span>{product.price}</span>
           </div>
            </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
