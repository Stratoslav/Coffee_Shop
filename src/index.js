import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
<<<<<<< HEAD

// # See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

// # dependencies
// /node_modules
// /.pnp
// .pnp.js

// # testing
// /coverage

// # production
// /build

// # misc
// .DS_Store
// .env.local
// .env.development.local
// .env.test.local
// .env.production.local

// npm-debug.log*
// yarn-debug.log*
// yarn-error.log*
=======
>>>>>>> f13c137d2465f06ef1bdd3644e6704b0fb52dddd
