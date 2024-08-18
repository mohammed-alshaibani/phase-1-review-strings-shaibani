// Write your code in this file!
const currentUser = "Flatiron School";
const welcomeMessage = "Welcome to Flatbook, " + currentUser + "!";
const excitedWelcomeMessage =
  "WELCOME TO FLATBOOK, " + currentUser.toUpperCase() + "!";
// let shortGreeting = "Welcome, " + currentUser[0] + currentUser.slice(1) + "!";

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

console.log(shortGreeting);