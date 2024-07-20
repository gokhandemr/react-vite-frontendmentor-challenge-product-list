import React, {useEffect} from "react";
// Components
import Product from "../../components/product";
import Loading from "../../components/loading";
// Redux
import {useDispatch, useSelector} from "react-redux";
import {getAllProducts} from "../../redux/slices/productsSlice";
// Style
import style from './style.module.css'

function HomePage() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.data);
  const isLoading = useSelector((state) => state.products.isLoading);

  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  return (
  <>
   {
      isLoading === true 
      ? 
      <Loading /> 
      : 
      products && 
        <div className={style.productsWrapper}>{products && products.slice(6, 18).map((item, index) => <Product key={index} item={item} />)}</div>
    }
  </>
  );
}

export default HomePage;
