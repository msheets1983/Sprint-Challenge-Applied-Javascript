// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
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
// Use your function to create a card for each of the articles and add the card to the DOM.


const cards = document.querySelector('.cards-container')

const articlesPromise = axios.get('https://lambda-times-backend.herokuapp.com/articles')

articlesPromise
    .then(data => {
        console.log('Article response', data.data.articles)
        for (let [type, articles] of Object.entries(data.data.articles)) {
            console.log(type, articles);
            articles.forEach(article => {
                cards.appendChild(createCard(article))
            })
        }
    })

.catch(error => {
    console.log('Error', error)
})

function createCard(object) {
    const card = document.createElement('div')
    const cardHeadline = document.createElement('div')
    const cardAuthorContainer = document.createElement('div')
    const cardImgContainer = document.createElement('div')
    const cardImg = document.createElement('img')
    const cardAuthor = document.createElement('span')

    card.classList.add('card')
    cardHeadline.classList.add('headline')
    cardAuthorContainer.classList.add('author')
    cardImgContainer.classList.add('img-container')

    cardHeadline.textContent = object.headline
    cardImg.src = object.authorPhoto
    cardAuthor.textContent = object.authorName

    card.appendChild(cardHeadline)
    card.appendChild(cardAuthorContainer)

    cardAuthorContainer.appendChild(cardImgContainer)
    cardAuthorContainer.appendChild(cardAuthor)

    cardImgContainer.appendChild(cardImg)

    return card

}