import createMainHeader from "./header.ts";
import "./style.css";

const renderMainContainer = () => {
  const root = document.querySelector(".root");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const header = createMainHeader("Monumentos del Mundo");
  if (!root) {
    throw Error("Element not found");
  }

  mainContainer.appendChild(header);
  root.appendChild(mainContainer);
};

renderMainContainer();
