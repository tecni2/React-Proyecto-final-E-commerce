import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { Link } from "react-router-dom";
import axios from "axios";
import { Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const [categoriesList, setCategoriesList] = useState([]);

  useEffect(() => {
    dispatch(getProductsThunk());

    axios
      .get("https://e-commerce-api.academlo.tech/api/v1/products/categories/")
      .then((res) => setCategoriesList(res.data.data.categories));
  }, []);

  // console.log("log productos", products);
  console.log("Log categoria", categoriesList);

  return (
    <div className="container--card">
      <div className="categories">
        <h2> Categorías</h2>
        {categoriesList.map((category, index) => (
          <div key={index}>
            <Button>{category.name}</Button>
          </div>
        ))}
      </div>

      {products.map((product, id) => (
        <div className="card-" key={id}>
          <Link to={`/products/${product.id}`}>
            <div className="container-image">
              <img src={product.productImgs[0]} alt="" />
            </div>

            <div className="description">
              <strong>{product.title}</strong>
              <p><b>Price</b></p>
              <span>{product.price}</span>
              <div className="container-button_detail">
              <Button className="button-product_detail" variant="success">view product detail</Button>{" "}
              </div>
             
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Home;
