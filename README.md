
# Weather App Documentation

This project is a simple weather application built using **HTML**, **CSS**, and **JavaScript**. It fetches real-time weather data from the OpenWeatherMap API and displays it to the user. Below is a detailed guide on how to set up and use this project.

---

## Features
- User can input a city name to get the current weather.
- Displays temperature, humidity, weather description, and an emoji representing the weather condition.
- Error handling for invalid city names or API issues.

---

## Prerequisites
1. A modern web browser.
2. A valid API key from [OpenWeatherMap](https://openweathermap.org/api).

**Note:** The API key provided in the code (`ef242fa399e3e1931b7554d3dd99673a`) is disabled. You must generate your own API key by signing up on OpenWeatherMap.

---

## How to Set Up
1. Clone or download the project files.
2. Open the `index.html` file in a text editor and replace the `apiKey` value in `script.js` with your new API key:
   ```
   const apiKey = "YOUR_NEW_API_KEY";
   ```
3. Save the changes.

---

## File Structure
- **index.html**: The main HTML file containing the structure of the app.
- **styles.css**: Contains all the styles for the app.
- **script.js**: Contains JavaScript code for fetching weather data and updating the UI.

---

## Usage
1. Open `index.html` in your browser.
2. Enter a city name in the input field and click "Get Weather".
3. View the weather details displayed on the card.

---

## Example Output
After entering a city name (e.g., "London"), you will see:
- City Name: London
- Temperature: 15°C
- Humidity: 80%
- Description: Clear sky
- Emoji: ☀️

---

## Error Handling
If there is an error (e.g., invalid city name or network issue), an error message will be displayed:
- "An error occurred while fetching the weather data. Please try again later."
- "Please enter a city name."

---

## Customization
You can customize the styles in `styles.css` to change the look and feel of the app.

---

## Troubleshooting
1. **API Key Issue**: Ensure you have replaced the placeholder API key with your own valid key from OpenWeatherMap.
2. **Network Errors**: Ensure you have an active internet connection.
3. **Invalid City Name**: Check for typos in the city name.

---

## License
Creative Commons Zero v1.0 Universal.

