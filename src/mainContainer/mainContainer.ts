import createMainHeader from "../header/header";
import createMonumentList from "../monuments/monumentsList/createMonumentsList";
import { type Monument } from "../monuments/types";
import createMainNavigationMenu from "../navigationMenu/navigatioMenu";
import "./styles.css";

const renderMainContainer = (monuments: Monument[]) => {
  const root = document.querySelector(".root");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const header = createMainHeader("Monumentos del Mundo");
  if (!root) {
    throw Error("Element not found");
  }

  const navigationMenu = createMainNavigationMenu();
  const monumentList = createMonumentList(monuments);

  mainContainer.append(header, navigationMenu, monumentList);
  root.appendChild(mainContainer);
};

export default renderMainContainer;
