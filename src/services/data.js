const DATA_API="https://my-json-server.typicode.com/shlomohailo/etioianapi/spices"

export async function getData() {

    return await fetch(DATA_API)
        .then(response => response.json())
        .catch((error) => {
            alert(error)
        })
}