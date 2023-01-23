import "./App.scss";
import { Link, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";

import MainComponent from "./components/Main/Main";

import { Menu } from "./components/Menu/Menu";
function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        {/* <MainComponent />
        <About />
        <Action />
        <GalleryComponent />
        <Booking />
        <Contacts /> */}
        {/* <Link to="/menu">Menu</Link> */}
        <Routes>
          <Route exact path="/" element={<MainComponent />} />

          <Route path="/menu" element={<Menu />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
