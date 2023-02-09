import { users } from './users.js'

const url = "http://localhost:5500/api"

function getUsers() {
    axios.get(url)
    .then( response => {
        apiResult.textContent = JSON.stringify(response.data)
    })
    .catch( error => console.error(error))
}

function getUser(id) {
    axios.get(`${url}/${id}`)
    .then( response => {
        const data = response.data;
        userName.textContent = data.name
        avatar.src = data.avatar
        avatar.style.width = "200px"
        userCity.textContent = data.city

        alertApi.textContent = JSON.stringify(response.data)
    })
    .catch(error => console.error(error))
}

function addNewUser(newUser) {
    axios.post(url, newUser)
    .then( response => {
        alertApi.textContent = response.data
    })
    .catch(error => console.error(error))
}

function updateUser(id, userUpdated) {
    axios.put(`${url}/${id}`, userUpdated) 
    .then( response => alertApi.textContent = response.data)
    .catch(error => console.error(error))
}

function deleteUser(id) {
    axios.delete(`${url}/${id}`)
    .then(response => alertApi.textContent = response.data)
    .catch(error => console.error(error))
}

//updateUser(1, users.badaro)
//addNewUser(users.dkat)
//addNewUser(users.russel)
//addNewUser(users.matheus)
//addNewUser(users.edso)
//getUsers()
//getUser(1)
//getUser(2)
//getUser(3)
//getUser(4)
//getUser(5)
//deleteUser(5)