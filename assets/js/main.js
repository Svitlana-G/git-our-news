// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// Key: 6198b77b7ab94542bd32134d9f46635e

const myAPI = {
    key: "6198b77b7ab94542bd32134d9f46635e",
    url_base: "https://newsapi.org/v2/sources?apiKey=6198b77b7ab94542bd32134d9f46635e"
}

const searchbox = document.getElementById('searchbox')
const date = document.getElementById('start')

function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value)
}

fetch('http://newsapi.org/v2/sources?apiKey=6198b77b7ab94542bd32134d9f46635e')
    .then(response => response.json())
    .then(json => console.log(json))

// fetch('http://newsapi.org/v2/top-headlines?country=de&apiKey=6198b77b7ab94542bd32134d9f46635e')
//     .then(response => response.json())
//     .then(json => console.log(json))
