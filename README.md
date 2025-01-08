# Lingo Bingo: A Vocabulary Learning Application

## Project Overview

**Lingo Bingo** is an interactive language learning application designed to help users expand their vocabulary and improve communication skills in Japanese. This application helps users overcome the challenge of retaining vocabulary by offering an engaging platform where they can learn words easily. It is designed for beginners and intermediates who want to strengthen their vocabulary for effective communication.

## Purpose

The purpose of this application is to provide a fun and easy way to learn and memorize vocabulary in Japanese. It allows users to start learning with a single click and tracks their progress. Users need to log in to access the learning material, and the user authentication and data handling are managed through Firebase.

## Live URL

You can try out the live version of **Lingo Bingo** here:  

- **Surge:** [typical-hook.surge.sh](http://typical-hook.surge.sh)  
- **Firebase:** [https://learning-different-language.web.app/](https://learning-different-language.web.app/)

## Repository
[Lingo-Bingo-Repository](https://github.com/mdekramulridoy/Lingo-Bingo)

## Key Features

- **Interactive Learning:** Users can engage with the application to learn Japanese vocabulary effectively.
- **Vocabulary Lists:** A curated list of Japanese words categorized by difficulty, allowing users to expand their vocabulary at their own pace.
- **User Authentication:** Firebase-based login and registration system to securely manage users.
- **Progress Tracking:** Keeps track of user progress and allows them to continue learning from where they left off.
- **Responsive Design:** The app works across multiple devices, ensuring accessibility from both mobile and desktop.
- **Google Sign-In:** Enables users to sign in quickly and securely using their Google account.
- **Password Reset:** Users can easily reset their passwords if they forget them, through Firebase’s email reset functionality.

## Main Technologies
This project utilizes the following main technologies:
- **React**: For building the user interface.
- **React Router DOM**: For managing client-side routing.
- **Firebase**: For backend services and authentication.
- **TailwindCSS**: For styling the application.
- **DaisyUI**: For prebuilt UI components with TailwindCSS.
- **Animate.css**: For animations.
- **LocalForage**: For offline storage and data caching.
- **Match Sorter**: For easy data sorting.
- **React Icons**: For adding scalable vector icons.

## Main Features
This project includes the following key features:
1. **Responsive Design**: Works seamlessly across devices like mobile, tablet, and desktop.
2. **Firebase Integration**: Provides authentication and real-time database services.
3. **Client-Side Routing**: Uses React Router for dynamic navigation without page reloads.
4. **Offline Data Storage**: Utilizes LocalForage for storing and caching data locally.
5. **Custom Animations**: Adds visual effects using Animate.css.
6. **Prebuilt UI Components**: DaisyUI enhances styling and speeds up development.
7. **Interactive Icons**: Implements vector icons using React Icons.

## Dependencies
Here are the primary dependencies used in this project:
- **animate.css**: ^4.1.1
- **firebase**: ^11.0.2
- **localforage**: ^1.10.0
- **match-sorter**: ^8.0.0
- **react**: ^18.3.1
- **react-countup**: ^6.5.3
- **react-dom**: ^18.3.1
- **react-hot-toast**: ^2.4.1
- **react-icons**: ^5.3.0
- **react-router-dom**: ^6.28.0
- **sort-by**: ^1.2.0

### Development Dependencies
- **@eslint/js**: ^9.13.0
- **@types/react**: ^18.3.12
- **@types/react-dom**: ^18.3.1
- **@vitejs/plugin-react**: ^4.3.3
- **autoprefixer**: ^10.4.20
- **daisyui**: ^4.12.14
- **eslint**: ^9.13.0
- **eslint-plugin-react**: ^7.37.2
- **eslint-plugin-react-hooks**: ^5.0.0
- **eslint-plugin-react-refresh**: ^0.4.14
- **globals**: ^15.11.0
- **postcss**: ^8.4.49
- **tailwindcss**: ^3.4.15
- **vite**: ^5.4.10

## Running the Project Locally

To run this project on your local machine, follow these steps:

### 1. Prerequisites
- Install [Node.js](https://nodejs.org/) on your system.
- Ensure you have a Firebase project set up (if required).

### 2. Clone the Project
```bash
git clone [Your Project Repository URL]
cd [Project Folder Name]
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Set Environment Variables
Create a `.env` file in the root directory and add the following configuration:
```
REACT_APP_FIREBASE_API_KEY=[Your Firebase API Key]
REACT_APP_FIREBASE_AUTH_DOMAIN=[Your Firebase Auth Domain]
REACT_APP_FIREBASE_PROJECT_ID=[Your Firebase Project ID]
REACT_APP_FIREBASE_STORAGE_BUCKET=[Your Firebase Storage Bucket]
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=[Your Firebase Messaging Sender ID]
REACT_APP_FIREBASE_APP_ID=[Your Firebase App ID]
```

### 5. Run the Project
```bash
npm run dev
```

### 6. Open in Browser
Once the development server is running, open your browser and go to:
```
http://localhost:3000
```

## Contribution
To contribute to this project:
1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them with a meaningful message.
4. Push your branch and submit a Pull Request.
