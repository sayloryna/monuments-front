import { type Monument } from "../types";

const createMonumentCard = (monument: Monument): HTMLElement => {
  const monumentContainer = document.createElement("article");

  monumentContainer.classList.add("monument");
  monumentContainer.innerHTML = `
  <h2 class="monument__name">${monument.name}</h2>
  `;

  return monumentContainer;
};

export default createMonumentCard;
