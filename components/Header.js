// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function HeaderContent(date, title, temp) {
    const headerDiv = document.createElement('div')
    const headerDate = document.createElement('span')
    const headerTitle = document.createElement('h1')
    const headerTemp = document.createElement('span')

    headerDate.textContent = date
    headerTitle.textContent = title
    headerTemp.textContent = temp

    headerDiv.classList.add('header')
    headerDate.classList.add('date')
    headerTemp.classList.add('temp')

    headerDiv.appendChild(headerDate)
    headerDiv.appendChild(headerTitle)
    headerDiv.appendChild(headerTemp)

    return headerDiv
}

const headerComponent = HeaderContent('March 28, 2020', 'Lambda Times', '98°')
const headerContainer = document.querySelector('.header-container')
headerContainer.appendChild(headerComponent)

