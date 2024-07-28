# Dinosaur Express App

This is a simple Express.js application that displays dinosaur data. It demonstrates basic CRUD operations and serves a static HTML website.

## Features

- Displays a list of dinosaur names on the homepage.
- Shows detailed dinosaur data fetched from a JSON file.
- Provides a full static HTML website with CSS and images.
- Includes API endpoints for CRUD operations.
- 
## Project Structure

dinosaur-express-app/
├── data/
│ └── dinosaurs.json
├── public/
│ ├── index.html
│ ├── about.html
│ ├── contact.html
│ ├── api-demo.html
│ ├── styles/
│ │ └── style.css
│ ├── scripts/
│ │ └── script.js
│ └── images/
│ ├── aashna.jpg
│ ├── brachiosaurus.jpg
│ ├── mukal.jpg
│ ├── parveen.jpg
│ ├── spinosaurus.jpg
│ ├── stegosaurus.jpg
│ ├── triceratops.jpg
│ ├── tyrannosaurus.jpg
│ └── velociraptor.jpg
├── app.js
├── package.json
└── README.md


### Data

The `data/dinosaurs.json` file contains information about six different dinosaurs:
- Name
- Period
- Diet

### Frontend

The `public` folder contains the static HTML files and associated assets:
- `index.html`: Home page
- `about.html`: About page
- `contact.html`: Contact page
- `api-demo.html`: Page to demonstrate the API with a button to fetch JSON data
- `styles/style.css`: CSS styles for the website
- `scripts/script.js`: JavaScript to handle API interactions
- `images/`: Directory to store image files
  - `aashna.jpg`
  - `brachiosaurus.jpg`
  - `mukal.jpg`
  - `parveen.jpg`
  - `spinosaurus.jpg`
  - `stegosaurus.jpg`
  - `triceratops.jpg`
  - `tyrannosaurus.jpg`
  - `velociraptor.jpg`
    
### Backend

The backend is powered by Express.js and serves static files and API routes:
- `app.js`: Main application file that sets up the Express server and API routes

Usage
Home Page: Navigate to http://localhost:3000/ to see the home page.
About Page: Navigate to http://localhost:3000/about.html to see the about page.
Contact Page: Navigate to http://localhost:3000/contact.html to see the contact page.
API Demo Page: Navigate to http://localhost:3000/api-demo.html to see the API demo page and load dinosaur data.

API
The application includes an API endpoint to serve dinosaur data:

GET /api/dinosaurs: Fetches the list of dinosaurs from the dinosaurs.json file.
Example
You can test the API endpoint using Postman or any other API client:

URL: http://localhost:3000/api/dinosaurs
Method: GET
Contributing
Feel free to fork this repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

  
