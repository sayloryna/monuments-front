import createMainHeader from "../header/header";
import createMainNavigationMenu from "../navigationMenu/navigatioMenu";
import "./styles.css";

const renderMainContainer = () => {
  const root = document.querySelector(".root");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const header = createMainHeader("Monumentos del Mundo");
  if (!root) {
    throw Error("Element not found");
  }

  const navigationMenu = createMainNavigationMenu();

  mainContainer.append(header, navigationMenu);
  root.appendChild(mainContainer);
};

export default renderMainContainer;
