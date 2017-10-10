# React URL Shortener
A simple app to shorten a given URL.

## Get Started

1) Clone the project. `git clone https://github.com/sarah-vanderlaan/url-shortener.git`
2) Navigate into `url-shortener` folder
2) Install dependencies `npm install`
3) Run app with `npm start`.  Find app at localhost:3000. This command watches all files - everytime that code is rebuilt, linting runs and tests run.

## Features

1) React and Redux due to my familiarity with the libraries
2) Babel to compile ES6
3) Webpack to bundle files and leverage hot reloading during development
4) Express server to proxy requests
5) ESLint to report style/syntax issues
6) SCSS for improved css syntax
7) localStorage for persistent state on refresh/leaving page/etc.

### RESPONSIVE DESIGN:
Renders nicely in both desktop and mobile view:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/mobile.png)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/desktop.png)

### URL VALIDITY:
Currently I have implemented an error being displayed to the user underneath the input box when they attempt to submit with a blank URL input field. In the future, I would like to check the form of the URL to verify it is correct before submission.  I did however check if the submitted URL contained ‘https:/' and added it if it did not, as the API I call requires the URL to begin with this prefix.
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/invalidURL.png)

### LOADING STATE:
I have used a library called Halogen to add animated loading dots when the short link is being requested.  (See: InputURL component)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/loading.png)

## Future

I would like to extend this application in the future to better handle the different errors returned by the rebrandly API.  I also would like to leverage some of the other functionality available from the API to give more information to the user - an example being displaying the date when the link was created, or allowing the user to request a specific shortcode. Thirdly, as mentioned above, I would like to add better URL validation before the API is called. 
