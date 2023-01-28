import "./App.scss";

import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";

import MainComponent from "./components/Main/Main";

import { useState, lazy, Suspense } from "react";

import { Booking } from "./components/Booking/Booking";
import { Blog } from "./components/Blog/Blog.tsx";

import { useSelector } from "react-redux";
const CardShop = lazy(() => import("./components/Card/CardShop"));
const Menu = lazy(() => import("./components/Menu/Menu"));

function App() {
  //const [show, setShow] = useState(true);
  const isShowComponent = useSelector(
    (state) => state.navigationReducer.isShowComponent
  );
  console.log(isShowComponent);
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Suspense>
          <Routes>
            <Route exact path="/" element={<MainComponent />} />
            <Route exact path="/registration" element={<Booking />} />
            <Route
              path="/menu"
              element={isShowComponent === true ? <Menu /> : <CardShop />}
            />
            <Route path="/blog" element={<Blog />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
