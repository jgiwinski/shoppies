

export const getData = ( title ) => {
    return fetch(`https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}&s=${title}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('This request isn\'t available')
        }
      })
  }
  
