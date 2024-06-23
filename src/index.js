import App from "./App.js";
import { initRouter } from "./router/Router.js";

document.addEventListener("DOMContentLoaded", () => {
  const app = App({ $target: document.querySelector(".app") });
  initRouter(app);
});
