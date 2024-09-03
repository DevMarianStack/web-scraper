document.getElementById('scrape-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const url = document.getElementById('url').value;
    const resultsDiv = document.getElementById('results');

    fetch('/scrape', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ url })
    })
    .then(response => response.json())
    .then(data => {
        resultsDiv.innerHTML = '<h2>Scraped Results:</h2>';
        if (data.links && data.links.length > 0) {
            resultsDiv.innerHTML += '<h3>Links:</h3><ul>' +
                data.links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('') +
                '</ul>';
        }
        if (data.images && data.images.length > 0) {
            resultsDiv.innerHTML += '<h3>Images:</h3><ul>' +
                data.images.map(img => `<li><img src="${img}" alt="Image" style="max-width: 200px; max-height: 200px;"></li>`).join('') +
                '</ul>';
        }
        if (!data.links.length && !data.images.length) {
            resultsDiv.innerHTML += '<p>No results found.</p>';
        }
    })
    .catch(error => {
        resultsDiv.innerHTML = '<p>Error: ' + error.message + '</p>';
    });
});
