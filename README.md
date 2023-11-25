# Movie List Web App

This is a simple Node.js web application that uses Express and MongoDB to create a movie list.
with only 3 movies added, with google drive links attached
  - wednesday
  - vengeance
  - vesper

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/movie-list-app.git
   
2. Install dependencies:
cd movie-list-app
npm install

3. Set up MongoDB:

    Make sure MongoDB is running.
    Update the MongoDB connection string in app.js with your own connection string.

4. Start the application:
   node app.js or nodemon app.js

## Usage

The application provides a simple web interface to view movie details and search for movies.

Visit http://localhost:3000 in your web browser to access the application.

## Endpoints

    /: Home page.
    /movies: Movie list page.
    /:topic: Dynamic route to display details of a specific movie.

## Contributing

Contributions are welcome! Follow these steps to contribute:

    Fork the repository.
    Create a new branch: git checkout -b feature/new-feature.
    Make your changes and commit them: git commit -m 'Add new feature'.
    Push to the branch: git push origin feature/new-feature.
    Submit a pull request.
