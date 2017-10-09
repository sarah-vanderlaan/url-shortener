# React URL Shortener
A simple app to shorten a given URL.

## Get Started

1) Clone the project. `git clone https://github.com/sarah-vanderlaan/url-shortener.git`
2) Navigate into `url-shortener` folder
2) Install dependencies `npm install`
3) Run app with `npm start`.  Find app at localhost:3000. This command watches all files - everytime that code is rebuilt, linting runs and tests run.

## Features

### RESPONSIVE DESIGN:
Renders nicely in both desktop and mobile view:
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/mobile.png)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/desktop.png)

### URL VALIDITY:
Currently I have implemented an error being displayed to the user underneath the input box when they attempt to submit with a blank URL input field. Ideally, I would like to check the form of the URL to verify it is correct before submission but due to time constraints, I did not implement this feature.  I did however check if the submitted URL contained ‘https:/' and added it if it did not, as the API I call requires the URL to begin with this prefix.
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/invalidURL.png)

### LOADING STATE:
I have used a library called Halogen to add animated loading dots when the short link is being requested.  (See: InputURL component)
![alt text](https://raw.githubusercontent.com/sarah-vanderlaan/url-shortener/master/resources/loading.png)
