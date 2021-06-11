// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// Key: 6198b77b7ab94542bd32134d9f46635e

const myAPI = {
    key: "8bc5492f1ef44bada733788535a2d779",
    url_base: "https://newsapi.org/v2/sources?apiKey=6198b77b7ab94542bd32134d9f46635e"
}

const searchbox = document.getElementById('searchbox')
const date = document.getElementById('start')
const result = document.getElementById('result')


function placeholder() {
    let today = new Date().toISOString().slice(0, 10)
    let arrayTopics = ['Sport', 'Bussiness', 'Politics', 'Cinema', 'Health', 'Entertainment', 'Science', 'Technology', 'Apple', 'USA']
    let randomTopic = arrayTopics[Math.floor(Math.random() * arrayTopics.length)];
    fetch(`http://newsapi.org/v2/everything?q=${randomTopic}&from=${today}&sortBy=popularity&apiKey=6198b77b7ab94542bd32134d9f46635e`)
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
// placeholder();

function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value)
    result.innerHTML = ''
    // fetch(url_search)
    fetch(`http://newsapi.org/v2/everything?q=${searchbox.value}&from=${date.value}&sortBy=popularity&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })

}

// console.log(`http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey= ${myAPI.key}`)
function bussinessNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=business&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : elem.source.name}</p>
                <p>${elem.description ? elem.description : ''} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

function entertaimentNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=entertainment&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

function generalNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=general&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}
// generalNews()

function healthNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=health&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

function scienceNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=science&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

function sportNews() {

    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/top-headlines?country=de&category=sport&apiKey=${myAPI.key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

// function technologyNews() {

//     result.innerHTML = ''
//     fetch(`http://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${myAPI.key}`)
//         .then(response => response.json())
//         .then(json => {
//             console.log(json.articles)
//             json.articles.forEach(elem => {
//                 // console.log(elem)
//                 result.innerHTML += `<article>
//                 <h2>${elem.title}</h2>
//                 <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="Bild">
//                 <p>${elem.author ? elem.author : ''}</p>
//                 <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
//             })
//         })
// }

let key = "8bc5492f1ef44bada733788535a2d779"
let url_base = `http://newsapi.org/v2/top-headlines?country=de&category=technology&apiKey=${myAPI.key}`
fetch(url_base)

function news(para) {

    result.innerHTML = ''
    fetch(para)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            json.articles.forEach(elem => {
                // console.log(elem)
                result.innerHTML += `<article>
                <h2>${elem.title}</h2>
                <img src="${elem.urlToImage ? elem.urlToImage : ''}" alt="Bild">
                <p>${elem.author ? elem.author : ''}</p>
                <p>${elem.description} <a href="${elem.url}">weiter lesen</a> </p>`
            })
        })
}

function technologyNews() {
    news(url_base)
}