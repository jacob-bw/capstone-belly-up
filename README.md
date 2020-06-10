# Belly Up

## Description
> 
The world is haunted by a problem. A problem that has existed throughout the ages, and which is only finally beginning to be acknowledged.
I speak, of course, of stomachs without tattoos around their belly button. The world is awash with bare tummies because nobody can come up with a tattoo that will let them use their navel as the "O" in the script of their tattoo.

I aim to solve this problem.

Belly Up works in two ways:
The first: Retrieving a random word that contains an "O"
The second: Removing the "O" from the word, and placing the remaining letters in the appropriate location on either side of the navel.

Upon arrival at the homepage, users are presented with an example of the tattoo simulator. Users can change the font or belly model for the tattoo right from the homepage, and upon logging in with Google, they can save particular favorites, as well as go back and update or remove previously saved tattoo results.

## Screenshots

#### Homepage with User Logged Out
![screenshot of homepage with user logged out](https://raw.githubusercontent.com/jacob-bw/capstone-belly-up/master/src/screenshots/bellyup-home-loggedout.png)


#### Homepage with User Logged In
![screenshot of homepage with user logged in](https://raw.githubusercontent.com/jacob-bw/capstone-belly-up/master/src/screenshots/bellyup-home-logged-in.png)


#### Homepage with Font Selection Menu open
![screenshot of homepage with Font Selection Menu open](https://raw.githubusercontent.com/jacob-bw/capstone-belly-up/master/src/screenshots/bellyup-home-font-menu-open.png)


#### Saved Tattoos Page
![screenshot of homepage with user logged out](https://raw.githubusercontent.com/jacob-bw/capstone-belly-up/master/src/screenshots/bellyup-saved.png)

# Instructions on How to Run
* clone down this project
* install http-server from npm
* follow the instructions in [React.README.md](https://github.com/jacob-bw/capstone-belly-up/blob/master/React.README.md) to get npm running
* **Note**: Don't forget to add apiKeys from Firebase, formatted to match the example file `src/helpers/apiKeys.example.json`

## Contributors
[Jacob Best-Wittenberg](https://jacob-bw.dev/)

## Technologies Used
* HTML, CSS, JavaScript, OPC
* [Axios](https://github.com/axios/axios)
* [Bootstrap](https://getbootstrap.com/docs/4.3/getting-started/introduction/)
* [React](https://reactjs.org/)
* [SASS](https://sass-lang.com/documentation)
* [JSX](https://reactjs.org/docs/introducing-jsx.html)
* [ReactStrap](https://reactstrap.github.io/)
* [Firebase](https://firebase.google.com/)
* [Fortawesome - React-Fontawesome](https://github.com/FortAwesome/react-fontawesome)


## Inspiration for this Project
I've always thought it was fun to come up with creative placements for tattoos and words. Tt's been a running joke of mine for years to come up with silly or atypical combinations of words that would fit on the knuckles of your hands and/or feet. When tasked with creating an app that demonstrates full CRUD, I wanted to do something that continued to strengthen my experience with APIs, as well as applying the principles I've learned, but applied in very different ways than during any prior projects. Writing the function that checks a word for "O"s, and then to split the word on the "O" that was closest to the middle of the word, was one of the most challenging and most fun experiences that I've had to date.

This was ultimately significantly more challenging than I initially anticipated, but it was an incredible growth opportunity, and it certainly helped during challenging moments to be able to laugh at the very premise of the project and keep going.

## In The Future
I'm hoping to add an image upload capability that will allow users to upload images of their own stomachs, and choose custom fonts.

I'd also like to get more intentional styling and make the saved tattoos look more like polaroids of old flash.