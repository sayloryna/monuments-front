import "./styles.css";

const createMainHeader = (title: string) => {
  const header = document.createElement("header");
  header.classList.add("main-header");

  const heading = document.createElement("h1");
  heading.classList.add("title");
  heading.textContent = title;

  header.appendChild(heading);
  return header;
};

export default createMainHeader;
