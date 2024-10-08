# React-Native-App

Process Document for React Native App
1. Project Overview
This React Native application is a multi-screen mobile app that allows users to browse through a digital menu, add items to a shopping cart, select courses (like Starters, Mains, Desserts), and calculate the total cart price. The app is designed to offer a modern and user-friendly experience, suitable for private chefs or restaurant owners looking to digitize their menus.

2. App Features
Home Screen: Displays the available dishes, with options to filter by course and add items to the cart.
Add Menu Item Screen: Allows the user to add new dishes to the menu dynamically. Users provide the name, price, and course of the dish.
Course Selection Screen: Enables filtering menu items by course type (Starters, Mains, or Desserts).
Cart Screen: Displays the selected items and calculates the total price of the items in the cart.
3. Technology Stack
React Native: The core framework used to build the mobile app.
JavaScript (ES6): Used to write the app logic.
React Navigation: For navigating between screens.
StyleSheet: Used for the modern design and layout.
4. How It Works
The app uses React Navigation to handle transitions between the different screens. State management is done using React’s useState hooks for managing menu items, cart items, and totals.

Home Screen: Displays a list of menu items with buttons for each dish. When a user clicks “Add to Cart,” the dish is added to the cart.
Add Menu Item Screen: A form allows users to input new dish details, which get appended to the existing list of dishes upon submission.
Cart Screen: Displays all the items in the cart along with their prices. The total price is calculated dynamically.
Course Selection Screen: Lets users filter the menu by different categories of food, such as Starters, Mains, and Desserts.
5. Modern UI Design
The app features a clean, modern interface:

Minimalist layout with easy-to-read text and button placement.
Responsive design elements, ensuring the app works on both small and large screens.
Intuitive navigation with buttons clearly labeled for different functions (e.g., adding items, filtering by course, viewing cart).
