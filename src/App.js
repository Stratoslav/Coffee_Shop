import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";

import MainComponent from "./components/Main/Main";

import { useState, lazy, Suspense } from "react";

import { Booking } from "./components/Booking/Booking";
import { Blog } from "./components/Blog/Blog";
const CardShop = lazy(() => import("./components/Card/CardShop"));
const Menu = lazy(() => import("./components/Menu/Menu"));

function App() {
  const [show, setShow] = useState(true);
  let [cart, setCart] = useState([]);

  const handleClick = (item) => {
    if (cart.includes(item)) {
      return;
    }

    setCart([...cart, item]);
    console.log(cart);
  };
  const handleChange = (item, d) => {
    const index = cart.indexOf(item);
    const arr = cart;
    arr[index].l += d;

    if (arr[index].amount === 0) arr[index].amount = 1;
    setCart([...arr]);
  };

  return (
    <div className="App">
      <Header setShow={setShow} cart={cart} show={show} />
      <div className="container">
        <Suspense>
          <Routes>
            <Route exact path="/" element={<MainComponent />} />
            <Route exact path="/registration" element={<Booking />} />
            <Route
              path="/menu"
              element={
                show === true ? (
                  <Menu handleClick={handleClick} />
                ) : (
                  <CardShop
                    cart={cart}
                    setCart={setCart}
                    handleChange={handleChange}
                  />
                )
              }
            />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
