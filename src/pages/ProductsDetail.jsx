import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const ProductsDetail = () => {
  const { id } = useParams();
  const productDetail = useSelector((state) => state.products);
  const products = productDetail.find(
    (productId) => productId.id === Number(id)
  );

  console.log("los de ID:", products);

  return (
    <div>
      <h2>Product Detail:</h2>
      <div className="container-detail">
        <div className="detail">
          <div className="container-detail-img">
            <img src={products.productImgs[0]} alt="image" />
          </div>
          <div className="description">
            <div className="title">
              <h2>{products.title}</h2>
            </div>
            <li>{products.description}</li>

            <dir>
              <p>Price</p>
              <p>{products.price}</p>
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
      </div>
    </div>
  );
};

export default ProductsDetail;
