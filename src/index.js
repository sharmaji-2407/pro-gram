import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/core/styles";
import App from "../src/Components/Apps/App";
import theme from "./theme";
import * as serviceWorker from "./serviceworker";
import reportWebVitals from "./reportWebVitals";


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
    
  </React.StrictMode>
);

serviceWorker.unregister();
reportWebVitals();
