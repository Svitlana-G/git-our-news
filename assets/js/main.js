// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// ISabelleKey: 5d1d96fdba1347b7b6768e2c6896d024
// SamirKey: 9e340e4b19664220be3bd0e04a3bbb15
//SvitlanaKey: 94798b1296374af2bf61c5454a75c435
//PräsiKey: 

const myAPI = {
    key: "5d1d96fdba1347b7b6768e2c6896d024",
    url_base: "https://newsapi.org/v2/everything?"
}

window.onload = (event) => {
    console.log('page is fully loaded');
    placeholder();
};
const searchbox = document.getElementById('searchbox')
const date = document.getElementById('start')
const result = document.getElementById('result')
const sortBy = document.querySelector('select')

function placeholder() {
    let today = new Date().toISOString().slice(0, 10);
    let arrayTopics = ['Sport', 'Bussiness', 'Politics', 'Cinema', 'Health', 'Entertainment', 'Science', 'Technology', 'Apple', 'USA', 'Astrology', 'Weather']
    let randomTopic = arrayTopics[Math.floor(Math.random() * arrayTopics.length)];
    fetch(`http://newsapi.org/v2/everything?q=${randomTopic}&from=${today}&sortBy=${sortBy.value}=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h3>Some News about: ${randomTopic}</h3>
            <h2>${elem.title}</h2>
            <img src="${elem.urlToImage ? elem.urlToImage : 'assets/img/Dailynews.jpg'}" alt="">
            <p>${elem.author}</p>
            <p>${elem.description} <a href='${elem.url}' target="_blank"> Read More</a> </p> </article>`
            })
        })
}

function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value);
    console.log(sortBy.value);
    result.innerHTML = '';
    // if (date.value == "") {

    // }
    fetch(`http://newsapi.org/v2/everything?q=${searchbox.value}&from=${date.value}&sortBy=${sortBy.value}=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h3>You searched for News about: ${searchbox.value}</h3>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : 'assets/img/Dailynews.jpg'}" alt="">
                <p>${elem.author}</p>
                <p>${elem.description} <a href='${elem.url}' target="_blank">weiter lesen</a> </p> </article>`
            })
        })
}

