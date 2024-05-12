import createMonumentCard from "./monument/createMonumentCard";
import { type Monument } from "./types";

const createMonumentList = (monuments: Monument[]): HTMLUListElement => {
  const monumentList = document.createElement("ul");
  monumentList.classList.add("monuments");
  monuments.forEach((monument) => {
    const monumentContainer = document.createElement("li");
    const monumentCard = createMonumentCard(monument);

    monumentContainer.appendChild(monumentCard);
    monumentList.appendChild(monumentContainer);
  });

  return monumentList;
};

export default createMonumentList;
