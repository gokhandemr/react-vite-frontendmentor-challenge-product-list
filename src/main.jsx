import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
// Style
import "./index.css";
// Components
import Header from "./components/header";
import Footer from "./components/footer";
import Basket from "./components/basket/index.jsx";
// Router
import {BrowserRouter} from "react-router-dom";
// Redux
import {Provider} from "react-redux";
import {store} from "./redux/store.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <section className="left-block">
        <Header />
        <main>
          <App />
        </main>
      </section>
      <section className="right-block">
        <Basket />
      </section>
      <Footer />
    </Provider>
  </BrowserRouter>
);
