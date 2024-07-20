import React from "react";
// Redux
import {useSelector} from "react-redux";
// Images
import confirmedIcon from "../../images/icon-order-confirmed.svg";
// Style
import style from "./style.module.css";

function ConfirmedPopup() {
  const basket = useSelector((state) => state.basket.basket);
  console.log(basket);

  const totalPrice = () => {
    let price = 0;
    basket &&
      basket.map((item) => {
        price += item.price;
      });
    return `$${price.toFixed(2)}`;
  };

  return (
    <div className={style.confirmedPopup}>
      <div className={style.confirmedPopupWrapped}>
        <img className={style.confirmedIcon} src={confirmedIcon} alt="confirmed" />
        <h3>Order Confirmed</h3>
        <p>We hope you enjoy your food!</p>
        <ul>
          {basket &&
            basket.map((item, index) => (
              <li key={index}>
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h4>{item.title}</h4>
                  <div className={style.productDetails}>
                    <span>x1</span>
                    <p>${item.price.toFixed(2)}</p>
                  </div>
                </div>
              </li>
            ))}
          <div className={style.orderDetails}>
            <p>Order Total</p>
            <p>{totalPrice()}</p>
          </div>
        </ul>

        <button
          className={style.newOrderButton}
          onClick={() => {
            window.location.reload();
          }}
        >
          Start New Order
        </button>
      </div>
    </div>
  );
}

export default ConfirmedPopup;
