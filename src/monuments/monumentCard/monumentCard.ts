import { type Monument } from "../types";

const createMonumentCard = (monument: Monument): HTMLElement => {
  const monumentContainer = document.createElement("article");

  monumentContainer.classList.add("monument");
  monumentContainer.innerHTML = `
  <h2 class="monument__name">${monument.name}</h2>
  <div class="monument__info">
    <img class="monument__image" src="${monument.imageUrl}" alt="monumento" height=200 width=200 />
    <div class="monument__data">
      <h3>Descripción</h3>
      <span class="monument__description">${monument.description}</span>
      <h3>Localización</h3>
      <spanclass="monument__location>
        ${monument.city}, ${monument.country}
      </span>
    </div>
  </div> 
  `;

  return monumentContainer;
};

export default createMonumentCard;
