let newsPath = '/navigation/news.html';
fetch(newsPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('news').innerHTML = data;
    })
    .catch(err => {
      console.warn("Could not load news.html.", err);
    });