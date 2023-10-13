async function fetchData(url) {
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error(error)
  }
}

// Usage:
fetchData('https://jsonplaceholder.typicode.com/todos/1')
  .then((data) => console.log(data))
  .catch((error) => console.error(error))

// { userId: 1, id: 1, title: 'delectus aut autem', completed: false }
