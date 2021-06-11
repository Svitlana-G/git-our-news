// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// Key: 6198b77b7ab94542bd32134d9f46635e

const myAPI = {
    key: "9e340e4b19664220be3bd0e04a3bbb15",
    url_base: "https://newsapi.org/v2/sources?apiKey=9e340e4b19664220be3bd0e04a3bbb15"
}


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
            if(json.articles == undefined){
                result.innerHTML+= `<div style="width:100vw; height:100vh;margin:0 auto; display:flex; justify-content:center; background-image: url(https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80); background-size:cover; background-position:center;"><h2 style="text-alaign:center; color:#fff;margin-top:25vh;font-size:36px;">`+"Something went wrong. Please try again later!" +`</h2></div>`
             }
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
placeholder();
function searchArticle() {
    console.log(searchbox.value)
    console.log(date.value)
    result.innerHTML = ''
    fetch(`http://newsapi.org/v2/everything?q=${searchbox.value}&from=${date.value}&sortBy=popularity&apiKey=9e340e4b19664220be3bd0e04a3bbb15`)
        .then(response => response.json())
        .then(json => {
            console.log(json.articles)
            if(json.articles == undefined){
                result.innerHTML+= `<div style="width:100vw; height:100vh;margin:0 auto; display:flex; justify-content:center; background-image: url(https://images.unsplash.com/photo-1496715976403-7e36dc43f17b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80); background-size:cover; background-position:center;"><h2 style="text-alaign:center; color:#fff;margin-top:25vh;font-size:36px;">`+"Something went wrong. Please try again later!" +`</h2></div>`
               
            }
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

