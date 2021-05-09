const api_key = process.env.REACT_APP_API_KEY;

export const getData = ( title ) => {
    return fetch(`http://www.omdbapi.com/?apikey=${api_key}&s=${title}`)
      .then(response => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('This request isn\'t available')
        }
      })
  }
  
