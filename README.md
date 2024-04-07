# Menstrual Cycle Tracker Backend

This project serves as the backend for a Menstrual Cycle Tracker application. It is designed to allow users to track their menstrual cycle phases, providing insights into the current phase, the days until the next phase, and helpful explanations for each phase.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js (version 12 or later recommended)
npm (usually comes with Node.js)
### Installing

First, clone the repository to your local machine:

```bash
git clone https://github.com/Jeremy0404/menstrual-cycle-tracker.git
```

Next, navigate to the project directory and install the dependencies:

```bash
cd menstrual-cycle-tracker
npm install
```

### Running the Application

To start the application, run the following command in the project directory:

```bash
npm start
```

This will start the backend server, typically listening on port 3000 (or whichever port is specified in your configuration).

## Using the API

Start Menstruation: POST `/start-menstruation` - Marks the start of menstruation, recording the current date as the start date.
Get Current Phase: GET `/cycle-info` - Retrieves information about the current menstrual cycle phase based on the last recorded start date.

## Development

### Project Structure

`src/`: Source code for the backend, including core logic, repositories, and API endpoints.
`src/core/`: Core domain logic and entities.
`src/repositories/`: Data access layer, including the file-based repository for persisting cycle start dates.
`db.json`: A simple JSON file used for persisting data in lieu of a database.

### Technologies

Node.js and Express: For building the RESTful API.
TypeScript: For static type checking and modern JavaScript features.

## Enhancements (TODO)

- Implement dependency injection
- Better implementation of hexagonal architecture (really just basics for now)
- Database Integration: Replace the file-based persistence with a proper database (e.g., MongoDB, PostgreSQL) for scalability and reliability.
- Authentication and Authorization: Implement user authentication and authorization to support multiple users securely.
- Error Handling: Enhance error handling throughout the application for better fault tolerance and user feedback.
- Logging: Integrate a logging framework (e.g., Winston, Morgan) for improved logging of requests and errors.
- Input Validation: Add robust input validation on the API endpoints to prevent invalid data submissions.
- Unit Testing: Increase test coverage for the application, ensuring reliability and easier maintenance.
- CI/CD: Set up continuous integration and continuous deployment pipelines for automated testing and deployment.
