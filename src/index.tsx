import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const AppComponent = () => <App />;

const rootElement = document.getElementById("root")!;
const app = React.createElement(AppComponent);

createRoot(rootElement).render(app);

reportWebVitals();
