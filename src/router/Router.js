import HomePage from "../page/HomePage.js";
import SignupPage from "../page/SignupPage.js";

export function initRouter(app) {
  window.addEventListener("popstate", () => {
    route(app);
  });

  route(app);
}

export function route(app) {
  const { pathname } = window.location;
  const routeByPath = {
    "/": () => {
      const homePage = HomePage();
      app.setPage(homePage);
    },
    "/signup": () => {
      const signupPage = SignupPage();
      app.setPage(signupPage);
    },
  };

  if (!Object.keys(routeByPath).includes(pathname)) return;

  routeByPath[pathname]();
}

export function navigateTo(url) {
  window.history.pushState(null, null, url);
  const popStateEvent = new PopStateEvent("popstate", { state: null });
  dispatchEvent(popStateEvent);
}
