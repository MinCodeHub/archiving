// fetch_metadata.js
function fetchMetadata(url, callback) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');
            const metadata = {};

            doc.querySelectorAll('meta').forEach(meta => {
                if (meta.name) {
                    metadata[meta.name] = meta.content;
                } else if (meta.getAttribute('property')) {
                    metadata[meta.getAttribute('property')] = meta.content;
                }
            });

            callback(metadata);
        })
        .catch(error => console.error('Error fetching metadata:', error));
}
