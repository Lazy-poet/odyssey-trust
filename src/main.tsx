import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Client as Styletron } from "styletron-engine-atomic";
import { Provider as StyletronProvider } from "styletron-react";
import { BaseProvider } from "baseui";
import { theme } from "./theme";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const engine = new Styletron();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <StyletronProvider value={engine}>
        <BaseProvider theme={theme}>
          <App />
        </BaseProvider>
      </StyletronProvider>
    </BrowserRouter>
  </React.StrictMode>
);