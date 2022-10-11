const DATA_API="https://my-json-server.typicode.com/Jeck99/fake-data-api/data"

export async function getData() {

    return await fetch(DATA_API)
        .then(response => response.json())
        .catch((error) => {
            alert(error)
        })
}