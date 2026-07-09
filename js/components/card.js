export function Card(video) {

    return `
        <div class="card">

            <div class="thumb">
                <img src="${video.thumbnail}">
            </div>

            <h3>${video.title}</h3>

            <p>${video.genre}</p>

        </div>
    `;

}
