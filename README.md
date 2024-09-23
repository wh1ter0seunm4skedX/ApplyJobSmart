# ApplyJobSmart
**ApplyJobSmart** is an automation tool that simplifies and streamlines the job application process, helping job seekers save time by automating repetitive tasks involved in applying to job listings. This project is designed to manage job applications efficiently, automate form filling, and keep track of application statuses.

## Features

- **Automate Job Applications**: Automatically fill out job application forms using stored details, minimizing manual effort.
- **Manage Job Listings**: Keep track of all job postings of interest in one place.
- **Track Application Status**: Monitor the progress of your applications, set reminders, and follow up accordingly.
- **Database Integration**: Securely store user data, job listings, and application statuses in a MySQL database.

## Project Structure

- **Backend**: The backend is built with Python and provides the core application functionality.
  - **`run.py`**: Main entry point to start the backend server.
  - **`app` folder**: Contains application modules:
    - **`__init__.py`**: Initializes the application.
    - **`config.py`**: Configuration settings for the app.
    - **`models.py`**: Defines the database models.
    - **`routes.py`**: API routes to handle various requests.
    - **`services.py`**: Implements business logic and service functions.

- **Database**: 
  - MySQL is used to store job listings, user profiles, and application statuses.
  - Managed through Docker to ensure consistent and isolated environments.

- **Docker Setup**: The project includes a `docker-compose.yml` file to simplify setup and deployment using Docker.

## Environment Setup

The project uses Docker to manage the application environment. Here's an overview of the services configured:

- **MySQL Database**:
  - Image: `mysql:8.0`
  - Manages all data storage needs, including user profiles and job application information.

- **phpMyAdmin**:
  - Image: `phpmyadmin/phpmyadmin`
  - Provides a web interface for managing the MySQL database.

## Getting Started

### Prerequisites

- [Docker](https://www.docker.com/get-started) installed on your system.

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/ApplyJobSmart.git
   cd ApplyJobSmart
   ```

2. **Run the Application**:
   Use Docker Compose to build and start the application:
   ```bash
   docker-compose up --build
   ```

3. **Access phpMyAdmin**:
   Open your browser and go to [http://localhost:8080](http://localhost:8080) to manage the database.

### Configuration

- Update environment variables in `docker-compose.yml` to match your preferred settings for database user, password, and database name.

## Future Enhancements

- **Integration with Job Portals**: Directly connect with platforms like LinkedIn to auto-apply for job postings.
- **AI Recommendations**: Suggest relevant job listings based on user profiles.
- **Advanced Analytics**: Provide insights on application success rates and trends.

## Contributing

Contributions are welcome :) If you'd like to contribute, please fork the repository and submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any inquiries, please contact me by email - wh1ter0seunm4sked@gmail.com
