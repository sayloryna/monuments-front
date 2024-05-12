import "./styles.css";

const createMainNavigationMenu = () => {
  const navigationMenu = document.createElement("nav");

  navigationMenu.innerHTML = `
  <ul class="main-navigation-menu">
    <li class="main-navigation-menu__link list-link selected" ><a href="#">Lista de Monumentos</a></li>
    <li class="main-navigation-menu__link add-link" ><a href="#">Añadir Monumentos</a></li>
  </ul>
  `;

  return navigationMenu;
};

export default createMainNavigationMenu;
