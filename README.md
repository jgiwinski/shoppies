# The Shoppies

A movie nomination webpage that can search OMDB for movies, and allows the user to save their favorite films they feel should be up for nomination. 

![home view](https://github.com/jgiwinski/shoppies/blob/main/src/img/home-shot.png)

# - [DEPLOYED APP](https://shoppies-c7507xe93-jgiwinski.vercel.app/) - 

## Table of Contents

* [About the Project](#about-the-project)
* [Installation](#installation)
* [Functionality](#functionality)
* [Future Iterations](#future-iterations)
* [Technologies Used](#technologies-used)
* [Contributors](#contributors)
* [Contact](#contact)

## About the Project

The goal of this challenge was to create a webpage that can search OMDB for movies, and allows the user to save their favorite films they feel should be up for nomination. When they've selected 5 nominees they should be notified they're finished. 

#### UI/UX Requirements 
- Search OMDB and display the results (movies only)
- Add a movie from the search results to our nomination list
- View the list of films already nominated
- Remove a nominee from the nomination list
#### Technical Requirements 
- Search results should come from OMDB's API (free API key: http://www.omdbapi.com/apikey.aspx).
- Each search result should list at least its title, year of release and a button to nominate that film.
- Updates to the search terms should update the result list
- Movies in search results can be added and removed from the nomination list.
- If a search result has already been nominated, disable its nominate button.
- Display a banner when the user has 5 nominations.

## Installation

1. Fork (optional) and clone down this repository to a directory of your choice
2. <code>cd</code> into the repo
3. Run <code>npm i</code> to install dependencies
4. Run the command <code>npm run start</code> to run the application in your browser
5. Begin interacting!

## Functionality 

Once visiting the webpage the user will be greeted with a minimalist design and can start interacting with the app. Upon pageload several movies have already been populated to show to the user. The user has the option to nominate any of the chosen films on the page. If none of the films are worthy of nomination then the user has the option to search any movie title with the search bar at the top of the screen. After searching a new title the user can nominate any of the populated films. After selecting five films the user will be notified by a popup announcing they have nominated 5 films. 

![home](https://github.com/jgiwinski/shoppies/blob/main/src/img/shoppies-func.gif)

Should the user change their mind about their nominated films, they have the option to remove any of the films from the nominee list. Once there is an option spot on the list the user can select a new film to nominate. If the user tries to nominate a sixth film they will be stopped and warned that there are already 5 nominations on the nominee list. 


The app is also responseive and can be viewed on mobile, tablet, and desktop. 
![responsiveness](https://github.com/jgiwinski/shoppies/blob/main/src/img/responsiveness.gif)

## Future Iterations 

Due to some time constraints for this project there were some features that did not make it to production by May 9th. 
- Page does not update with search results after each key down. Currently the search bar relies on "submit" button for execution. 
- Error handling for when no movies are available after user enters a title in the search bar. 
- More animations and UI/UX interactivity.

## Technologies Used

- ![React](https://img.shields.io/badge/react%20-%2320232a.svg?&style=for-the-badge&logo=react&logoColor=%2361DAFB)
- ![JavaScript](https://img.shields.io/badge/javascript%20-%23323330.svg?&style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
- ![HTML5](https://img.shields.io/badge/html5%20-%23E34F26.svg?&style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3%20-%231572B6.svg?&style=for-the-badge&logo=css3&logoColor=white)
- ![Webpack](https://img.shields.io/badge/webpack%20-%238DD6F9.svg?&style=for-the-badge&logo=webpack&logoColor=black)

## Contributors
* [Julia Iwinski](https://github.com/jgiwinski) - Application Creator


## Contact
[<img src="https://camo.githubusercontent.com/a493f6833f99fb3c85788d6d9305e6b7a42b838e5ee5d138fd9a8214a7e77472/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f6c696e6b6564696e2d2532333030373742352e7376673f267374796c653d666f722d7468652d6261646765266c6f676f3d6c696e6b6564696e266c6f676f436f6c6f723d7768697465"/>][linkedin]
<!-- Personal Definitions  -->
[linkedin]: https://www.linkedin.com/in/julia-iwinski-898540138/

[<img src="https://img.shields.io/badge/Github-jgiwinski-informational?style=for-the-badge&labelColor=black&logo=github&color=8B0BD5"/>][github]
<!-- Personal Definitions  -->
[github]: https://github.com/jgiwinski

