import renderMainContainer from "./mainContainer/mainContainer";

import "./styles.css";

renderMainContainer().catch(() => {
  throw new Error("Server failed to load content");
});
