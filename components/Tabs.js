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
        const newTab = topicMaker(successResponse.data.topics)  
        tabs.appendChild(newTab)     
    })

    .catch(errorResponse => {
        console.log('Error!',errorResponse)
    })

    const topicMaker = (content) => {

        console.log(content)

        let Tab = document.createElement('div')
        // let newTab2 = document.createElement('div')
        // let newTab3 = document.createElement('div')
        // let newTab4 = document.createElement('div')
        // let newTab5 = document.createElement('div')

        Tab.textContent = 'text text';
        // newTab2.textContent = data[2];
        // newTab3.textContent = data[3];
        // newTab4.textContent = data[4];
        // newTab5.textContent = data[5];

        Tab.classList.add('tab')
        // newTab2.classList.add('tab')
        // newTab3.classList.add('tab')
        // newTab4.classList.add('tab')
        // newTab5.classList.add('tab')

        Tab.appendChild(content)

        return Tab;
    }

    const tabs = document.querySelector('.topics')

    // const cardTabs = data

    //  data.forEach(topics => {
    //     tabs.appendChild(topics)
    // })