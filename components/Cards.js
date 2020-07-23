// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

import axios from 'axios'


axios.get('https://lambda-times-backend.herokuapp.com/articles')

.then(successResponse => {
    console.log(successResponse.data.articles)
})

.catch(errorResponse => {
    console.log(errorResponse)
})

const cardFunction = (data) => {
    const cards = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    // const imgCont = document.createElement('div')
    const img = document.createElement('img')
    const name = document.createElement('span')

    cards.textContent = data.articles
    headline.textContent = data.headline
    author.textContent = data.authorName
    // imgCont.textContent = img
    img.src = data.authorPhoto
    name.textContent = name

    cards.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    // imgCont.classList.add('img-container')


    cards.appendChild(headline)
    cards.appendChild(author)
    author.appendChild(img)
    // imgCont.appendChild(img)
    author.appendChild(name)

    cards.addEventListener('click', () => {
        console.log(headline)
    })

    return cards;

}

const cardContent = cardFunction(data.articles)
const cardComponent = document.querySelector('.cards-container')
cardContent.appendChild(cardComponent)





