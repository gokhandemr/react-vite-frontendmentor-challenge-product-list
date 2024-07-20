// Redux
import {useDispatch} from "react-redux";
import {addToBasket} from "../../redux/slices/basketSlice";
// Style
import style from "./style.module.css";

function AddBasketButton({product}) {
  const {thumbnail, title, price, category} = product;
  const dispatch = useDispatch();

  const addProduct = () => {
    const timeStamp = new Date().valueOf();
    let newProduct = {
      thumbnail,
      title,
      price,
      category,
      timeStamp,
    };
    dispatch(addToBasket(newProduct));
  };

  return (
    <>
      <button
        className={style.addBasketButton}
        onClick={() => {
          addProduct();
        }}
      >
        Add to Cart
      </button>
    </>
  );
}

export default AddBasketButton;
