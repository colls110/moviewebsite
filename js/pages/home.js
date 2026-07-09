import { Header } from "../components/header.js";
import { Card } from "../components/card.js";
import { getVideos } from "../data.js";

export function Home() {

    const videos = getVideos();

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
