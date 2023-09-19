# Weather App

**Description:** This Weather App allows users to check current weather conditions either based on their location or by searching for a city. It provides real-time weather data, including temperature, humidity, wind speed, and more.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [Contributing](#contributing)

## Features

- **User Location Weather:** Retrieve weather information based on the user's current location.
- **City Search:** Search for weather information in any city around the world.
- **Responsive Design:** Works well on various screen sizes and devices.
- **Custom Styling:** Stylish and modern design with custom fonts and colors.

## Getting Started

### Prerequisites

- Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api) for accessing weather data.

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone https://github.com/your-username/weather-app.git

   ```

2. Navigate to the project directory:
   ```bash
   cd weather-app
   ```

## Usage

1. **Configure API Key:**

   - Get your OpenWeatherMap API key from [OpenWeatherMap](https://openweathermap.org/api).
   - Open the `script.js` file in your code editor.
   - Replace `'YOUR_API_KEY'` in the `const API_KEY` declaration with your actual API key:

     ```javascript
     const API_KEY = 'YOUR_API_KEY';
     ```

2. **Run the App:**

   - Open the `index.html` file in your web browser or serve the project using a development server.

3. **Using the App:**

   - **Your Weather Tab:** Click this tab to check the weather based on your current location. You may be prompted to grant location access.

   - **Search Weather Tab:** Click this tab to search for weather information by city name.

4. Enjoy up-to-date weather information!

## Hosting

This Weather App is hosted on Netlify. You can access it online at [Weather App](https://dot-weather-app.netlify.app/).

## API Key

To access weather data, you need to obtain an API key from OpenWeatherMap. The API key should be kept secure and not shared publicly.

### Contributing

Contributions are welcome! If you want to contribute to this project, please follow these steps:

1. Fork the project.

2. Create a new branch for your feature or bug fix.

3. Make your changes and commit them with descriptive commit messages.

4. Push your branch to your fork.

5. Create a pull request to the original repository.

Please ensure your code follows the project's coding standards and includes relevant documentation.
