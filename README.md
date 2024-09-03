# Web Scraper Interface

This project provides a simple web interface for scraping a given website to extract files such as links and images. It consists of a frontend built with HTML, CSS, and JavaScript, and a backend built with Node.js, Express, and Cheerio for scraping functionality.

## Project Structure

/web-scraper
/public
index.html
styles.css
script.js
server.js
README.md

## Features

- 🌐 User-friendly interface for inputting a URL.
- 📂 Scrapes website files including links and images.
- 📋 Displays the results in a formatted list.

## Prerequisites

1. **Node.js** and **npm** installed on your system. You can download them from [Node.js official website](https://nodejs.org/).

2. **Install required npm packages** by running:
   ```bash
   npm install express axios cheerio

Installation and Running Locally

	1.	Clone the repository:

git clone https://github.com/DevMarianStack/web-scraper.git
cd web-scraper


	2.	Install dependencies:

npm install


	3.	Start the server:

node server.js


	4.	Open your browser and navigate to http://localhost:3000 to use the web scraper interface.

Hosting Options

You can host this application on various platforms:

	1.	GitHub: Use GitHub to host your static files (HTML, CSS, JS) by storing them in a GitHub repository. For dynamic functionality (Node.js backend), you’ll need a separate hosting solution.
	2.	Render.com 🚀: Create a Render.com account, link it to your GitHub repository, and configure build and start commands. Deploy the service and set up a custom domain if desired.
	3.	Heroku ☁️: Sign up for Heroku, create a new app, link it to your GitHub repository, and configure build and deployment settings. Deploy your application and configure a custom domain if needed.
	4.	AWS Elastic Beanstalk: Deploy and scale applications, including Node.js, using AWS Elastic Beanstalk. It provides a fully managed environment for your application.

Buying a Domain from Namecheap 🌐

	1.	Purchase a domain from Namecheap.
	2.	Set up DNS records to point to your hosting provider’s servers. For GitHub, use the appropriate DNS settings provided by GitHub or your chosen hosting service.
	3.	Configure your hosting service to use the purchased domain, following the instructions provided by your hosting provider.

Usage

	1.	Enter a URL into the text box on the web page. Ensure the URL starts with http:// or https://.
	2.	Click the “Scrape” button to start the scraping process.
	3.	The results, including all the links and images found on the website, will be displayed below the form.

Code Overview

	•	server.js: Contains the server-side code using Express. Handles POST requests to /scrape, fetches the URL content, and scrapes for files using Cheerio.
	•	public/index.html: The main HTML file for the web interface.
	•	public/styles.css: CSS file for styling the web interface with a modern, clean look.
	•	public/script.js: JavaScript file for handling form submissions, sending requests to the server, and displaying results.

Dependencies

	•	Express: Web framework for Node.js.
	•	Axios: Promise-based HTTP client for making requests.
	•	Cheerio: jQuery-like library for parsing and manipulating HTML.

Contributing

	1.	Fork the repository.
	2.	Create a new branch (git checkout -b feature/YourFeature).
	3.	Commit your changes (git commit -am 'Add some feature').
	4.	Push to the branch (git push origin feature/YourFeature).
	5.	Create a new Pull Request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments

	•	Node.js
	•	Express
	•	Axios
	•	Cheerio

Feel free to reach out if you have any questions or issues!
