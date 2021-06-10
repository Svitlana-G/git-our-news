// Inputs abholen ==> Svitlana
// API Fetch function
// IN der Box das Result zurückgeben ==> Samir
// Key: 6198b77b7ab94542bd32134d9f46635e

// const myAPI = {
//     key: "6198b77b7ab94542bd32134d9f46635e",
//     url_base: "https://newsapi.org/v2/sources?apiKey=6198b77b7ab94542bd32134d9f46635e"
// }

// const searchbox = document.getElementById('searchbox');
// const date = document.getElementById('start');
// const category = document.querySelector("select")


// function searchArticle() {
//     console.log(searchbox.value)
//     console.log(date.value)
//     console.log(category.value)
//     let userWord = searchbox.value;
//     fetch(`http://newsapi.org/v2/everything?q=${userWord}&apiKey=6198b77b7ab94542bd32134d9f46635e`)
//         // .then(response => response.json())
//         // .then(json => console.log(json))

//         //translate answer into JSon syntax
//         .then(myArticle => { return myArticle.json() })

//         // display the json_Answer on the html page
//         .then(showMyArticle);
// }

// function showMyArticle(word) {
//     console.log(word);
//     let title = document.querySelector('h1');
//     title.innerHTML = `${word.articles[0].title}`;
// }

// searchbox.addEventListener('keypress', (e) => {
//     console.log(searchbox.value);

//     if (e.key == 'Enter') {
//         console.log('fnz');
//         searchArticle();
//     }
// });
