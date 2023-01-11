# Utility - Home Assignment

This project follows the proposed requirements for Utility's Hiring Challenge( [click here](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax#links) for more details ), however, it also takes some liberties with development, such as logic and presentation.

## How to test
For ease of build and testing, this project utilizes the Expo framework.
For instructions on how to set up an Expo environment, please refer to [Expo's installation guide](https://docs.expo.dev/).

After cloning this repo, and with the environment correctly set, please follow these steps
* Open you system terminal and navigate to the project folder, type as follows:
```
npm install
```
* With the installation completed, please, enter the command (option being, ios or android) to test on a physical device or simulator:
```
npm run [option]
```
* You can also test it by installing the Expo Client app on a testing device and scanning the QRCODE, by running:
```
npm start
```

# About this Project

The approach was to set a full experience in a single glance. All required events and user interactions are available on the Home screen.

### **Presentation**
After initializing, the app auto-fetches and presents the Racers' data.
Two CTA buttons are available, one to refresh data and one to start the race simulation. 

With the simulation running, some UI elements reflect the simulation state, such as how many racers arrived, are running, and the computed likelihood of winning.

### **Design**
Divided into two parts, the main control, which is composed of the CTAs options and a brief introductory text, and the Racers panel, which presents the racer's results and properties.

A couple of free Lottie animations were used only as visual props, for a better experience only. The used animations can be found at [https://lottiefiles.com/](https://lottiefiles.com/)

### Improvements
A maximum stack algorithm could have been used to improve the sorting performance. However, since this test only receives 5 pilots per API request, a common sort provided by the utilized language can be used.

Add a global state manager if complexity increases

## Special thanks
To anyone reviewing this repo project. Thank you!