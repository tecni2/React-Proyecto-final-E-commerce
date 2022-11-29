import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductsThunk } from "../store/slices/products.slice";

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
  const relatedproducts = productDetail.filter(
    (productId) => productId.category?.id === productDetail.category?.id
  );

  console.log("los de rela:", relatedproducts);

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
      </div>
    </div>
  );
};

export default ProductsDetail;
