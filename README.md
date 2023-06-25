# URL Shortener

This project is a URL shortener built using Node.js, MongoDB, Tailwind CSS, and EJS templating. The purpose of the application is to provide a simple and efficient way to shorten long URLs, making them easier to share and remember.

## Features

- **Shorten URLs:** The application allows users to input long URLs and generate a shortened version of them.
- **Redirects:** When a user visits a shortened URL, they are redirected to the original long URL.
- **Custom URLs:** Users can choose to customize the shortened URL with their desired alphanumeric string, if available.
- **Analytics:** Basic analytics are provided to track the number of clicks on each shortened URL.

## Technologies Used

- **Node.js:** The project is built using the Node.js runtime environment, leveraging its event-driven and non-blocking I/O model for efficient handling of requests.
- **MongoDB:** The MongoDB NoSQL database is used to store and retrieve the URLs and related data.
- **Tailwind CSS:** The application utilizes the Tailwind CSS framework for styling and creating a responsive user interface.
- **EJS:** EJS (Embedded JavaScript) is used as the templating engine for generating dynamic HTML pages.

## Getting Started

1. Clone the repository from GitHub: `git clone https://github.com/aliredahajj/url-shortener.git`
2. Install the project dependencies: `npm install`
3. Start the project: `npm run start` for production mode, or `npm run devStart` for development mode.

## Acknowledgments

A special thanks to @murtajaziad for their valuable assistance during the development process.

Please note that there is no specific configuration file for MongoDB or any other external services in this project. Make sure to set up your MongoDB connection string or update the code to match your MongoDB configuration.

Feel free to explore, modify, and enhance the project according to your needs. If you encounter any issues or have suggestions, please submit them via GitHub issues.
