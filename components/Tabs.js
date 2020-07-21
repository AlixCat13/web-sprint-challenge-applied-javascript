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

import axios from 'axios'

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
        let newTab1 = document.createElement('div')
        let newTab2 = document.createElement('div')
        let newTab3 = document.createElement('div')
        let newTab4 = document.createElement('div')
        let newTab5 = document.createElement('div')

        newTab1.textContent = tab
        newTab2.textContent = tab
        newTab3.textContent = tab
        newTab4.textContent = tab
        newTab5.textContent = tab

        newTab1.classList.add('tab')
        newTab2.classList.add('tab')
        newTab3.classList.add('tab')
        newTab4.classList.add('tab')
        newTab5.classList.add('tab')

        return newsfeedTab;
    }

    const topics = document.querySelector('.topics')

    data.topics.forEach(topics => {
        topics.appendChild(newsfeedTab(topics[0], topics[1], topics[2], topics[3], topics[4]))
    })