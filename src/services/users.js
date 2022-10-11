const USERS_API="https://my-json-server.typicode.com/shlomohailo/usersjsongake/users"

export async function getUsers() {

    return await fetch(USERS_API)
        .then(response => response.json())
        .catch((error) => {
            alert(error)
        })
}