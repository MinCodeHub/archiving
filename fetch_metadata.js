// fetch_metadata.js

function fetchMetadata(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            let imageUrl = '';

            const metaTags = doc.querySelectorAll('meta');
            metaTags.forEach(meta => {
                if (meta.getAttribute('property') === 'og:image') {
                    imageUrl = meta.content;
                }
            });

            callback(imageUrl);
        })
        .catch(error => console.error('Error fetching metadata:', error));
}
