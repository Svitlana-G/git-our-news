// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// ISabelleKey: 6198b77b7ab94542bd32134d9f46635e
// SamirKey: 9e340e4b19664220be3bd0e04a3bbb15
//SvitlanaKey: 94798b1296374af2bf61c5454a75c435
//PräsiKey: 

const myAPI = {
    key: "6198b77b7ab94542bd32134d9f46635e",
    url_base: "https://newsapi.org/v2/sources?apiKey=6198b77b7ab94542bd32134d9f46635e"
}

window.onload = (event) => {
    console.log('page is fully loaded');
    placeholder();
};
const searchbox = document.getElementById('searchbox')
const date = document.getElementById('start')
const result = document.getElementById('result')

function placeholder() {
    let today = new Date().toISOString().slice(0, 10)
    let arrayTopics = ['Sport', 'Bussiness', 'Politics', 'Cinema', 'Health', 'Entertainment', 'Science', 'Technology', 'Apple', 'USA']
    let randomTopic = arrayTopics[Math.floor(Math.random() * arrayTopics.length)];
    fetch(`http://newsapi.org/v2/everything?q=${randomTopic}&from=${today}&sortBy=popularity&apiKey=9e340e4b19664220be3bd0e04a3bbb15`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h3>Some News about: ${randomTopic}</h3>
            <h2>${elem.title}</h2>
            <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
            <p>${elem.author}</p>
            <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p> </article>`
            })
        })
}

function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value)
    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/everything?q=${searchbox.value}&from=${date.value}&sortBy=popularity&apiKey=9e340e4b19664220be3bd0e04a3bbb15`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h3>You searched for News about: ${searchbox.value}</h3>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p> </article>`
            })
        })
}

