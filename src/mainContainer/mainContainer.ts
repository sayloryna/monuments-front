import createMainHeader from "../header/header";
import getMonuments from "../monuments/getMonuments";
import createMonumentList from "../monuments/monumentsList/createMonumentsList";

import createMainNavigationMenu from "../navigationMenu/navigatioMenu";
import "./styles.css";

const renderMainContainer = async () => {
  const root = document.querySelector(".root");

  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const header = createMainHeader("Monumentos del Mundo");
  if (!root) {
    throw Error("Element not found");
  }

  const navigationMenu = createMainNavigationMenu();
  const monumentList = createMonumentList(await getMonuments());

  mainContainer.append(header, navigationMenu, monumentList);
  root.appendChild(mainContainer);
};

export default renderMainContainer;
