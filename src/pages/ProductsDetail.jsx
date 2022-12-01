import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { getProductsThunk, setProducts } from "../store/slices/products.slice";

const ProductsDetail = () => {
  const { id } = useParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, []);

  const productDetail = useSelector((state) => state.products);
  
  const products = productDetail.find(
    (productId) => productId.id === Number(id)
  );
  const relatedProducts = productDetail.filter(
    (productId) => productId.category.id === products.category.id && products.id != productId.id
  );

  // console.log("product", products);

  console.log("log relacionados:", relatedProducts);

  return (
    <div>
      <h2>Product Detail:</h2>
      <div className="container-detail">
        <div className="detail">
          <div className="container-detail-img">
            <img src={products?.productImgs[0]} alt="image" />
          </div>
          <div className="description">
            <div className="title">
              <h2>{products?.title}</h2>
            </div>
            <li>{products?.description}</li>

            <dir>
              <p>Price</p>
              <p>{products?.price}</p>
            </dir>

            <div>
              <p>Quantity</p>
              <button> - </button>
              <span>0</span>
              <button> + </button>
            </div>
            <button> Add to cart </button>
          </div>
        </div>
        <hr />
        {/* PROCTOS DE LA MISMA CATEGORIA */}
        
        
      </div>
      <h3>Related Products</h3>
      {relatedProducts.map((relatedProduct, id) => (
      <div className="container2" key={id}>

          <Link to={`/products/${relatedProduct.id}`}>
            <div className="container-image">
              <img src={relatedProduct.productImgs[0]} alt="" />
            </div>

            <div className="description">
              <strong>{relatedProduct.title}</strong>

              <p>
                <b>Price</b>
              </p>
              <span>{relatedProduct.price}</span>
            </div>
          </Link>
      </div>
      ))}
     
    </div>
  );
};

export default ProductsDetail;
