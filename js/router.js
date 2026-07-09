import { Home } from "./pages/home.js";

export function router() {

    const app = document.getElementById("app");

    app.innerHTML = Home();

}
