# react-recipe-app

## Introduction

This Recipe App allows users to search for recipes by category or main ingredients and choose from a selection that comes up. When users click on a
a recipe, they will see a list of ingredients, directions, and also a short youtube video embedded in the page explaining how to make the recipe. This app uses a MERN stack
and the MealDB to provide users with the recipes and youtube videos. The main goal of this application was to create a place where users can look at and
save recipies that they like to thier profile.

## How to View
The React App is currently not hosted on any dedicated servers, so in order to view, you will have to follow these steps
- Make sure you have node installed on your machine
- Download the project from this repo onto your local machine
- Use terminal to enter the poject directory
- Enter the Backend directory and npm install -> npm run dev
- Open seperate terminal
- Enter frontend directory
- npm install -> npm start
- Go to browser and enter http://localhost:3000 for the home directory

## Technologies

For the fronted this app uses React.js and Material UI. The backend uses an express node server to handle requests from the frontend and axois to make requests to the recipe
api. The database used to save user information is MongoDB. Authentification is handled by Firebase Auth. 

## Contribution
Please follow the steps below when making contributions:
- Open a sepereate branch with syntax feature/{insertFeatureName}
- Make sure to doccument the changes you made in your code
- Squash all the merges when submiting
- Submit a pull request detailing the changes that were made
