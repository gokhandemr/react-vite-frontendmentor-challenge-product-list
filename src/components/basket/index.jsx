import React, {useState} from "react";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {deleteFromBasket, deleteAllFromBasket} from "../../redux/slices/basketSlice";
// Style
import style from "./style.module.css";
// Images
import iconCarbon from "../../images/icon-carbon-neutral.svg";
import emptyImages from "../../images/illustration-empty-cart.svg";
import deleteIcon from "../../images/icon-remove-item.svg";
// Components
import ConfirmedPopup from "../confirmed-popup/index";

function Basket() {
  const [isPopup, setIsPopup] = useState(false);
  const basket = useSelector((state) => state.basket.basket);
  const dispatch = useDispatch();

  const totalPrice = () => {
    let price = 0;
    basket &&
      basket.map((item) => {
        price += item.price;
      });
    return `$${price.toFixed(2)}`;
  };

  return (
    <>
      {isPopup && <ConfirmedPopup />}
      <aside className={style.sideBar}>
        <h3 className={style.sideBarHeading}>Your Cart ({basket.length})</h3>

        {basket.length > 0 && (
          <button
            className={style.deleteAllButton}
            onClick={() => {
              dispatch(deleteAllFromBasket());
            }}
          >
            Delete All
          </button>
        )}

        {basket.length > 0 ? (
          <>
            <ul>
              {basket &&
                basket.map((item, index) => (
                  <li key={index} className={style.sideBarProduct}>
                    <div>
                      <h4>{item.title}</h4>
                      <div className={style.productDetails}>
                        <p className={style.productLength}>1x</p>
                        <p className={style.price}>${item.price.toFixed(2)}</p>
                      </div>
                    </div>
                    <button
                      className={style.deleteButton}
                      onClick={() => {
                        dispatch(deleteFromBasket(item));
                      }}
                    >
                      <img src={deleteIcon} alt="delete" />
                    </button>
                  </li>
                ))}
            </ul>

            <div className={style.orderTotal}>
              <p>Order Total</p>
              <p>{totalPrice()}</p>
            </div>

            <div className={style.carbonContainer}>
              <img src={iconCarbon} alt="carbon" />
              <p>
                This is a <strong>carbon-neutral</strong> delivery
              </p>
            </div>

            <button className={style.confirmButton} onClick={() => setIsPopup(true)}>
              Confirm Order
            </button>
          </>
        ) : (
          <div className={style.emptyBasket}>
            <img src={emptyImages} alt="empty-cart" />
            <p>Your added items will appear here</p>
          </div>
        )}
      </aside>
    </>
  );
}

export default Basket;
