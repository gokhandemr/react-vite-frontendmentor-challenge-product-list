import React from "react";
// Style
import style from "./style.module.css";
// Componet
import AddBasketButton from "../add-basket-button";

function Product({item}) {
  return (
    <article className={style.product}>
      <img className={style.productImg} src={`${item.thumbnail}`} alt={item.title} />
      <AddBasketButton product={item} />
      <p className={style.productCategory}>{item.category}</p>
      <h2 className={style.productName}>{item.title}</h2>
      <p className={style.productPrice}>${item.price.toFixed(2)}</p>
    </article>
  );
}

export default Product;
