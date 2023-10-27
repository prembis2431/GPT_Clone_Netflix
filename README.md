# NetflixGPT

NetflixGPT is a dynamic movie recommendation web application built using ReactJS, Tailwind CSS, Redux Toolkit, and GPT APIs. It leverages Firebase Authentication for user login and incorporates a range of exciting features such as custom hooks, language change options, infinite scroll, memoization, modularity, responsiveness, protected routes, and code reusability.


# Netflix GPT operations

- Create React App
- Configured Tailwind CSS
- Header
- Routing of App
- Login form
- Signup form
- Form validation
- Use of useRef Hook
- Firebase Setup
- Deploying our app to production
- Create a SignUp User Account
- Implement Sign-user API
- Created Redux Store with userSlice
- Implemented Sign out
- Update Profile
- BugFix: Signup user display and profile picture update
- BugFix: If the user is not logged in redirect /browse to login page and vice versa
- UnSubscribed to the on onAuthStateChanged callback
- Add hardcoded values to the constant file
- Register TMDB API & create an app & get access token
- Get Data from TMDB now playing movies list API
- Custom Hook for Now Playing Movies
- Create movieSlice
- Update Store with movies Data
- Planning for MainContauiner & secondary container
- Fetch Data for Trailer Video
- Update Store with Trailer Video Data
- Embedded the Yotube video and make it autoplay and mute
- Tailwind Classes to make Main Container look pleasing
- Build Secondary Container.
- Build Movie List
- Build Movie Card
- TMDB Image CDN URL
- Made the Browsre page amazing with Tailwind CSS
- useNowPlayingMovies Custom hook
- Get Open AI Api Key
- (BONUS) Multi-language Feature in our App
- GPT Search Page
- GPT Search Bar
- Gpt Search API Call
- Fetched gptMoviesSuggestions from TMDB
- Created gptSlice added data
- Resused Movie List component to make movie suggestion container
- Memoization - Memoization is used to optimize the performance of functions by caching the results   of expensive function calls and reusing those results when the same inputs occur again.
- Added .env file
- Adding .env file to gitignore
- Made our Site Responsive.


# Features

# Custom Hook:
We've implemented a custom hook to manage state and logic across components efficiently.

# Language Change Option:
Users can easily switch between languages to enjoy movie suggestions in their preferred language.

# Infinite Scroll:
Say goodbye to pagination! Our app uses infinite scroll for a seamless browsing experience.

# Memoization:
We've optimized performance using memoization techniques to prevent unnecessary renders.

# Modularity:
The project is organized into modular components, making it easy to maintain and extend.

# Responsiveness:
NetflixGPT is designed to look great on all devices, ensuring an excellent user experience.

# Protected Routes:
Certain routes are protected and only accessible to authenticated users, enhancing security.

# Code Reusability:
We've prioritized code reusability, promoting clean, maintainable code.

# Getting Started
# To get started with NetflixGPT, follow these steps:
Clone this repository to your local machine.
Install dependencies using npm install.
Create a Firebase project and configure Firebase Authentication.
Add your GPT API credentials.
Run the app using npm start.