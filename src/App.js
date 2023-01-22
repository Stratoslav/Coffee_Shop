import "./App.scss";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Action } from "./components/Action/Action";
import { GalleryComponent } from "./components/Gallery/GalleryComponent";
import { Booking } from "./components/Booking/Booking";
import { Contacts } from "./components/Contacts/Contacts";
import MainComponent from "./components/Main/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <MainComponent />
        <About />
        <Action />
        <GalleryComponent />
        <Booking />
        <Contacts />
      </div>
    </div>
  );
}

export default App;
