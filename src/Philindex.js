const ramenURL = 'http://localhost:3000/ramens'

function getRamen(url) {
    return fetch(url)
    .then(resp => resp.json())
}

const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const ramenName = document.querySelector('.name')
const ramenDetailImage = document.querySelector('.detail-image')
const ramenRestaurant = document.querySelector('.restaurant')
const ramenRating = document.querySelector('#rating-display')
const ramenComment = document.querySelector('#comment-display')


function createImgTag(ramenObj) {
    const imgTag = document.createElement('img')
    imgTag.src = ramenObj.image
    imgTag.alt = ramenObj.name
    imgTag.id = ramenObj.id

    imgTag.addEventListener('click', handleUpdateDetail)

    ramenMenu.append(imgTag)
}

function updateDetail(ramen) {
    ramenName.innerText = ramen.name
    ramenRestaurant.innerText = ramen.restaurant
    ramenDetailImage.src = ramen.image
    ramenDetailImage.alt = ramen.name
    ramenRating.innerText = ramen.rating
    ramenComment.innerText = ramen.comment
}

function handleUpdateDetail(event) {
    getRamen('http://localhost:3000/ramen/' + id)
}

// initialize
function init() {
    getRamen(ramenURL)
    .then(ramenArr => {
        updateDetail(ramenArr[0])
        ramenArr.forEach((ramenObj) => {
           createImgTag(ramenObj)

        //    imgTag = document.createElement('img')
        //    imgTag.src = ramenObj.image
        //    ramenMenu.append(imgTag)
        //    imgTag.addEventListener('click', () => {
        //            console.log('hello')
        //    })
        })
    })
}

 init()
