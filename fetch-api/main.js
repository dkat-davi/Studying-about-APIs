const url = "http://localhost:5500/api"

function getUsers() {
    fetch(url)
        .then( response => response.json())
        .then( data => renderApiResult.textContent = JSON.stringify(data))
        .catch(error => console.error(error))
}

function getUser(id) {
    fetch(`${url}/${id}`)
        .then( response => response.json())
        .then( data => {
            const user = data
            
            renderApiResult.textContent = JSON.stringify(user)

            userName.textContent = user.name

            userAvatar.src = user.avatar
            userAvatar.style.width = "200px"

            userCity.textContent = user.city
        })
        .catch( error => console.error(error))
}

function addUser(newUser) {
    fetch(url, {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then( response  => response.json())
    .then( data => alertApi.textContent = data )
    .catch(error => console.error(error))
}

function updateUser(updatedUser, id) {
    fetch(`${url}/${id}`, {
        method: "PUT",
        body: JSON.stringify(updatedUser),
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json())
    .then( data => alertApi.textContent = data)
    .catch( error => console.error(error))
}

function deleteUser(id) {
    fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
    .then( response => response.json())
    .then( data => alertApi.textContent = data)
    .catch()
}

const dkat = {
    name: "Davi Kalel Andrade Teixeira",
    avatar: "https://avatars.githubusercontent.com/u/86988184?v=4",
    city: "Montes Claros"
}

const russel = {
    name: "Russel Edward",
    avatar: "https://avatars.githubusercontent.com/u/108694490?v=4",
    city: "Montes Claros"
}

const badaro = {
    name: "Douglas Badaró",
    avatar: "https://avatars.githubusercontent.com/u/83524761?v=4",
    city: "Montes Claros"
}

const matheus = {
    name: "Matheus Vieira",
    avatar: "https://avatars.githubusercontent.com/u/107436843?v=4",
    city: "Montes Claros"
}

const edso = {
    name: "Edson Júnior",
    avatar: "https://avatars.githubusercontent.com/u/107575590?v=4",
    city: "Montes Claros"
}

//updateUser(matheus, 4)
//addUser(edso)
//deleteUser(5)
//getUsers()
getUser(2)