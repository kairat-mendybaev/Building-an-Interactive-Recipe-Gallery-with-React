# Building-an-Interactive-Recipe-Gallery-with-React

Prerequisites

Before you begin, ensure you have the following installed:

Node.js: Download from Node.js website.
npm: Included with Node.js.
Setup Instructions

Follow these steps to get the application running on your local machine:

Clone the Repository:
Clone this repository to your local machine or download the ZIP and extract it.
Navigate to the Project Directory:
Open a terminal and navigate to the directory where you have saved the project.
Install Dependencies:
Run the following command to install the necessary dependencies:
npm install
Start the Development Server:
Launch the application by running:
npm start
The application will automatically open in your default web browser at http://localhost:3000.
File Structure

src/
App.js - Main application file that renders the Gallery component.
Gallery.js - Contains the Gallery component responsible for image display and navigation.
imageList.js - Holds the array of image objects used in the gallery.
App.css - Styles for the application.
Component Details

Gallery Component:
Manages the current image index using React's useState.
Displays the image and description based on the current index.
Handles click events to navigate between images and updates component state accordingly.
