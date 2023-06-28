import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import MainComponent from "./components/Main/Main";
import {  lazy, Suspense } from "react";
import { Booking } from "./components/Booking/Booking";
import { Blog } from "./components/Blog/Blog";
import { NotFound } from "./components/NotFound/NotFound";

const CardShop = lazy(() => import("./components/Card/CardShop"));
const Menu = lazy(() => import("./components/Menu/Menu"));

function App() {


  

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Suspense>
          <Routes>
            <Route path="/Kyiv" element={<MainComponent />} />
            <Route path="/Herson" element={<MainComponent />} />
            <Route path="/Harkiv" element={<MainComponent />} />
            <Route path="/Summy" element={<MainComponent />} />
            <Route path="/Dnipro" element={<MainComponent />} />
            <Route path="/Lviv" element={<MainComponent />} />
            <Route path="registration" element={<Booking /> }/>
            <Route
              path="menu"
              element={ <Menu />}
            />
            <Route path="blog" element={<Blog />} />
            <Route path="/shop" element={ <CardShop/>} />
            <Route path="*" element={<Navigate to="/Kyiv" />} />

            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Suspense>
     
      </div>
       
      
    </div>
  );
}

export default App;
