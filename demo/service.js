

function search(text) {
    const query = (text || '').split(' ').join('+');
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`

    return fetch(url)
        .then(res => res.json())
        .then(res => res.tracks.items.map(item => (
            {
                name: item.name,
                album: item.album.name,
                img: item.album.images[2].url,
                link: item.preview_url
            }
        )));
}