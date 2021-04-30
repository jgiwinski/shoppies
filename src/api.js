export const getData = ( title ) => {
    return fetch(`http://www.omdbapi.com/?apikey=ff1a2f36&s=${title}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('This request isn\'t available')
        }
      })
  }
  
