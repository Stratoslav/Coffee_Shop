import "./App.scss";

import { Navigate, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { useFormik, FormikProps,FormikValues, FormikErrors } from "formik"
import MainComponent from "./components/Main/Main";

import {  lazy, Suspense } from "react";

import { Booking } from "./components/Booking/Booking";
import { Blog } from "./components/Blog/Blog";



import { NotFound } from "./components/NotFound/NotFound";
import { useAppSelector } from "./redux/hooks";

const CardShop = lazy(() => import("./components/Card/CardShop"));
const Menu = lazy(() => import("./components/Menu/Menu"));

function App() {
  const isShowComponent = useAppSelector(
    (state) => state.navigationReducer.isShowComponent
  );
  let props 
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
              element={isShowComponent === true ? <Menu /> : <CardShop />}
            />
            <Route path="blog" element={<Blog />} />

            <Route path="*" element={<Navigate to="/Kyiv" />} />

            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
