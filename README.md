# Website for professionals and students of the architecture sector.
Version: 1.0.0
Author: Erick Rivadeneira Delgado
Author URI: https://github.com/Erivadel

This is an exercise for General Assembly Web Development Course. It was asked to use
a public API and make some unity tests. This exercise is done with React, JS, Axios,
HTML and Sass.

## Demo

To check the result of the web page's development, please check the next link: 
Erivadel/erivadeneira_final-project: Front End Web Development: Proyecto Final (github.com)
## Development

### 1. Structure:

The application has a few components:

- A header with several pages that directs to social networks and portfolios to learn more about the contents and existing works.
- A page of contacts linked to an API to receive emails with personal data of the interested client.
- a page that redirects to a WhatsApp group so that the client can communicate directly with the owner of the page  
- Contains Carrousel with 3 photos
- A connection with API publishes the Instagram account of the owner of the page so that you can update new content and these will be displayed automatically without making configurations.
### 2. API KEY:
- First, the application takes the input entered by the user and makes a request to [EmailJs] (https://www.emailjs.com/docs/).
- Secondly, the application takes the input written by the user and makes a request to [Instagram] to view content of videos and photos of the owner to this website created (https://developers.facebook.com/docs/instagram/).

### 3. Email Functionality:

Once the contact page is displayed the user can click on send message after filling in the required fields so the owner can contact after receiving the email that will be stored in the messaging account.

### 4. Instagram account functionality

All content such as photos and videos that the owner has on his business Instagram account, or promotion, will be displayed on the website. And if the Instagram account is updated with new content or deleting new content, the website will also do so in real time.
Long-lived Access Token will be valid for 60 days, if the long-lived token has expired you may refresh the token within 60 days, the token will no longer be refreshed if exceeded the 60 days limit. Documentation must be read to perform renewal.



## Install

To use this project you may need to follow the next steps:
- Clone the repo
- Install the dependencies with `npm install`
- Start the project with `npm start`

This project has been developed by *Erick Rivadeneira Delgado*.
