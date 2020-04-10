// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>

const topics = document.querySelector('.topics')

const topicsPromise = axios.get('https://lambda-times-backend.herokuapp.com/topics')

topicsPromise
    .then(data => {
        console.log('response', data.data.topics)
        data.data.topics.forEach(topic => {
            topics.appendChild(createTab(topic))
        })
    })

.catch(error => {
    console.log('Error', error)
})

function createTab(topic) {
    const topics = document.createElement('div')

    topics.classList.add('tab')

    topics.textContent = topic

    return topics
}