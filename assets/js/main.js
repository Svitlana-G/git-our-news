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
const result = document.getElementById('result')

function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value)
    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/everything?q=${searchbox.value}&from=${date.value}&sortBy=popularity&apiKey=6198b77b7ab94542bd32134d9f46635e`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
    <h2>${elem.title}</h2>
    <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
    <p>${elem.author}</p>
    <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

