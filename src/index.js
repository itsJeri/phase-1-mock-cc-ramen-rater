// write your code here
const getRamen = 'http://localhost:3000/ramens'

document.addEventListener('DOMContentLoaded', () => {
    // fetch ramen objects
    getFetch(getRamen)
    .then((ramenArr) => {
        // renders ramen object as image in #ramen-menu and allows click event on image to render ramen details
        ramenArr.forEach(addRamenMenu)
        
        // ramenSubmit
        
        ramenForm.addEventListener('submit', (e) => {
            e.preventDefault()
            const newRamenObj = {}
            newRamenObj.name = document.querySelector('#new-name').value;
            newRamenObj.restaurant = document.querySelector('#new-restaurant').value;
            newRamenObj.image = document.querySelector('#new-image').value;
            newRamenObj.rating = document.querySelector('#new-rating').value;
            newRamenObj.comment = document.querySelector('#new-comment').value;
            addRamenMenu(newRamenObj)
            ramenForm.reset()
        })
        editForm.addEventListener('submit', (e) => {
            e.preventDefault()
            detailsRating.innerText = editForm[0].value
            detailsComment.innerText = editForm[1].value
            editForm.reset()
        })
        // load first ramen on page load
        renderRamen(ramenArr[0])

        
    })
    // DOMContentLoaded
})
const ramenMenu = document.querySelector('#ramen-menu');
const ramenForm = document.querySelector('#new-ramen');
const editForm = document.querySelector('#edit-ramen');

const detailsImage = document.querySelector('.detail-image');
const detailsName = document.querySelector('.name');
const detailsRestaurant = document.querySelector('.restaurant');
const detailsRating = document.querySelector('#rating-display');
const detailsComment = document.querySelector('#comment-display');

function getFetch(url) {
    return fetch(url)
    .then((res) => res.json())
}

function editFormInputs() {
    const newRamenObj = {}
    newRamenObj.name = ramenForm[0].value
    newRamenObj.restaurant = ramenForm[1].value
    newRamenObj.image = ramenForm[2].value
    newRamenObj.rating = ramenForm[3].value
    newRamenObj.comment = ramenForm[4].value
}


function addRamenMenu(ramenObj) {
    const div = document.createElement('div');
    const imgTag = document.createElement('img');
    const delBtn = document.createElement('button');
    imgTag.src = ramenObj.image
    imgTag.alt = ramenObj.name

    delBtn.name = 'delete'
    delBtn.innerText = 'X'

    div.append(imgTag)
    div.append(delBtn)
    ramenMenu.append(div)

    // clickable img renders ramen details
    imgTag.addEventListener('click', () => {
        // renders ramenDetails on img click
        renderRamen(ramenObj)
    })
    delBtn.addEventListener('click', (e) => {
        e.target.parentElement.remove()
        renderRamen(ramenObj)
    })
}

// render ramen details
function renderRamen(ramenObj) {
        // assigns html to details destination
        detailsImage.src = ramenObj.image
        detailsImage.alt = ramenObj.name
        detailsName.innerText = ramenObj.name
        detailsRestaurant.innerText = ramenObj.restaurant
        detailsRating.innerText = ramenObj.rating
        detailsComment.innerText = ramenObj.comment
}

// create ramen object on submit
function createRamenObj() {
    const newRamenObj = {}
    newRamenObj.name = document.querySelector('#new-name').value;
    newRamenObj.restaurant = document.querySelector('#new-restaurant').value;
    newRamenObj.image = document.querySelector('#new-image').value;
    newRamenObj.rating = document.querySelector('#new-rating').value;
    newRamenObj.comment = document.querySelector('#new-comment').value;
    addRamenMenu(newRamenObj)
}