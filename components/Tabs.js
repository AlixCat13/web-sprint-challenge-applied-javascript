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
        Object.data.forEach(tab => {
            const tab1 = newsfeedTab(tab)
            topics.appendChild(tab1)
        })
    })
    .catch(errorResponse => {
        console.log(errorResponse)
    })

    const newsfeedTab = () => {
        let newTab1 = document.createElement('div')
        let newTab2 = document.createElement('div')
        let newTab3 = document.createElement('div')
        let newTab4 = document.createElement('div')
        let newTab5 = document.createElement('div')

        newTab1.textContent = Object.data.topic[0]
        newTab2.textContent = Object.data.topic[1]
        newTab3.textContent = Object.data.topic[2]
        newTab4.textContent = Object.data.topic[3]
        newTab5.textContent = Object.data.topic[4]

        newTab1.classList.add('tab')
        newTab2.classList.add('tab')
        newTab3.classList.add('tab')
        newTab4.classList.add('tab')
        newTab5.classList.add('tab')

        return newsfeedTab;
    }

    const tabs = document.querySelector('.topics')

    Object.data.topics.forEach(topics => {
        tabs.appendChild(topics)
    })