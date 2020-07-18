// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

// import axios from 'axios'

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(successResponse => {
        console.log(successResponse)
        successResponse.data.forEach(tab => {
            let tab1 = newsfeedTab(tab)
            topics.appendChild(tab1)
        })
    })
    .catch(errorResponse => {
        console.log(errorResponse)
    })

    const newsfeedTab = (tab) => {
        let newTab = document.createElement('div')
        newTab.textContent = tab
        newTab.classList.add('tab')

        return newTab
    }

    const topics = document.querySelector('.topics')

    data.topics.forEach(topics => {
        topics.appendChild(newsfeedTab(data.topics[0], data.topics[1], data.topics[2], data.topics[3], data.topics[4]))
    })