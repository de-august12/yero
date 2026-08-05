let navPath = '/navigation/nav.html';
fetch(navPath)
    .then(response => response.text())
    .then(data => {
      document.getElementById('navbar').innerHTML = data;
    })
    .catch(err => {
      console.warn("Could not load nav.html.", err);
    });