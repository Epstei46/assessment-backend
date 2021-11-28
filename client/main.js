const fortuneButton = document.querySelector("#fortuneButton")
const form = document.querySelector('form')


const baseURL = 'http://localhost:4000/api/compliment'

const favComplimentCallback = ({data: compliment}) => displayFav(compliment)
const errCallback = err => console.log(err)
const favoriteContainer = document.querySelector("#favorite-container")
const updateFavoriteButton = document.querySelector("#updateFavorite")

const getFavCompliment = () => axios.get(baseURL).then(favComplimentCallback).catch(errCallback)
const addFavCompliment = body => axios.post(baseURL, body).then(favComplimentCallback).catch(errCallback)
const updateFavCompliment = body => axios.put(baseURL, body).then(favComplimentCallback).catch(errCallback)
const deleteCompliment = () => axios.delete(baseURL).then(favComplimentCallback, favoriteContainer.classList.add("hide")).catch(errCallback)


const updateFavorite = (e) => {
    e.preventDefault()
    let compliment = document.querySelector('#compliment')
    let bodyObj = {str: compliment.value}
    updateFavCompliment(bodyObj)
    compliment.value = ""
}

function submitHandler(e) {
    e.preventDefault()
    let compliment = document.querySelector('#compliment')
    let bodyObj = {str: compliment.value}

    try {
        let thiss = document.querySelector("p")
        alert(`"${thiss.textContent}" is already your favorite compliment.\nClick on the "Update Favorite" button to update with your new favorite.`)
    }
    catch {
        addFavCompliment(bodyObj)
        compliment.value = ""
    }

    
}

function createFavItem(text) {
    if (text.length > 0){
        favoriteContainer.classList.remove("hide")
        const fav = document.createElement("section")
        fav.classList.add("fav-compliment")
        fav.innerHTML = `<p>${text}</p>
        <button onclick="deleteCompliment()">Delete Compliment</button>`
        favoriteContainer.appendChild(fav)
    }
}

function displayFav(str) {
    favoriteContainer.innerHTML = ``
    createFavItem(str)
}

updateFavoriteButton.addEventListener('click', updateFavorite)
form.addEventListener('submit', submitHandler)

getFavCompliment()