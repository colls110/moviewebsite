import { Header } from "../components/header.js";

export function Home() {

    return `
        ${Header("home")}

        <main class="container">
            <h1>Welcome!</h1>
        </main>
    `;

}
