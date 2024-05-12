import renderMainContainer from "./mainContainer/mainContainer";

import "./styles.css";

renderMainContainer().catch(() => {
  throw new Error("server Error");
});
