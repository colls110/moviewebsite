import { Home } from "./pages/home.js";
import { Movies } from "./pages/movies.js";
import { Shows } from "./pages/shows.js";

export function router() {

    const app = document.getElementById("app");
    const path = window.location.pathname;

    switch (path) {

        case "/":
            app.innerHTML = Home();
            break;

        case "/movies":
            app.innerHTML = Movies();
            break;

        case "/shows":
            app.innerHTML = Shows();
            break;

        default:
            app.innerHTML = `
                <h1>404</h1>
                <p>Page not found.</p>
            `;
    }

}
