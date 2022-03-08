# Car Share (made with ReactJS)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Start-up

- Make sure to follow steps in order, `npm start` gives you the ability to fix the port conflict. 
- open your terminal and change to the hooked file.
- In your terminal, run `json-server --watch db.json` to get the user API.
- In a seperate terminal, run `npm start`. If it asks to use a different port name, type `y` or `yes` and press `enter`.

### Usage

Welcome to E-Garage!

E-Garage is a React single page application where users can keep track of owned vehicles Online. 

If youre not sure about logging in, login as a guest! However, you will not be able to add vehicles; however, all other app functionalities are available.

`sample log-in:`
username: `JB92`
password: `1234`

### Creating a profile

When creating a profile, a password and username is necessary. No profile picture will be provided if the user does not provide one. 

The profile picture must be an image URL.

### User Page

When you sign in, you will be redirected to your own userpage. Here you will see your username, profile picture, an "add a vehicle button," and a personal vehicle list (if you are a new user, or have no vehicles saved, no vehicles will be shown).

To add a vehicle, click the "Add a vehicle" button. Type your vehicles make, model, year, milage, body type, and a personal image of your vehicle (stock images are welcome if you are not confortable showing your personal vehicle). When all desired information is placed, click the button "send to my garage." Once clicked, your vehicle information will be saved and you will see a card with your newly inputed vehicle info displayed. If you change your mind just click the same button where it says "hide form," and it will hide the new vehicle form. 

On the vehicle cards, you will see the year, make, and model of your vehicle as well as the vehicle type and milage displayed below. The provided image will be under the text on the bottom half of the display card.

### Search Page

To search for a user click the button labeled "Search for a user..." Once clicked, a searchbar will pop-up. Search the user you are looking for, click the grey "search" button. A list of usernames and the entire number of vehicles the specific user currently holds will be displayed. If you would like to see all users, search with an empty field. 

### Sign Out

To signout, click the "Sign Out" button on the very top of the page. This will redirect you to the login page from the beginning of the session. When you come back, just repeat the steps!