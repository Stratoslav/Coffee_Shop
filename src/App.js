import "./App.scss";
import { Header } from "./components/Header/Header";
import { About } from "./components/About/About";
import { Action } from "./components/Action/Action";
import { GalleryComponent } from "./components/Gallery/GalleryComponent";
import { Booking } from "./components/Booking/Booking";
import { Contacts } from "./components/Contacts/Contacts";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Header />
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
