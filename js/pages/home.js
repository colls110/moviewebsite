import { Header } from "../components/header.js";
import { Card } from "../components/card.js";
import { videos } from "../data/videos.js";

export function Home() {

    return `

        ${Header("home")}

        <main class="container">

            <h1>Welcome!</h1>

            <div class="grid">

                ${videos.map(Card).join("")}

            </div>

        </main>

    `;

}
