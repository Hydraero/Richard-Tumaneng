# Richard Tumaneng Software Portfolio Website
**This project is to create my entire portfolio website. This document shows all the relevant information about this project**


## Technologies Used

This project uses the following Front end and Back end technologies and languages:

### Front end

- Vite
- React.js
- TypeScript
- Tailwind
- AlpineJS

### Back end

- Express
- Node.js



## Setup & Installation 


### Client Set up:

1. Create new Vite project by using the following code

    `npm create vite@latest `

    and follow the prompts for React Typescript project + SWC (compiler)

2. Install Tailwind, PostCSS and Autoprefixer using the following code:

    `npm i tailwindcss postcss autoprefixer`

    and initiate tailwind using:

    `npx tailwind init -p`

3. Other dependencies used:

    - react-type-animation
    - react-dom
    - react-icons 
    - react-tabs (Used for tabs on About Me section. Used the following tutorial: https://blog.logrocket.com/how-to-build-tab-component-react/)
    - react-toggle-dark-mode (Followed the tutorial: https://www.geeksforgeeks.org/how-to-add-dark-mode-in-reactjs-using-tailwind-css/)
    - @types/react
    - @types/react-dom
    - @types/alpinejs
    - @types/node
    - @types/react-type-animation
    - alpinejs (Used for intersect plugin for observing the intersection observer api to check if user is in viewport)
    - @alpinejs/intersect

    Install the dependencies above using the following code:

    `npm i -d react-type-animation react-dom react-icons @types/react @types/react-dom alpinejs @alpinejs/intersect @types/alpinejs @types/node @types/react-type-animation`


### Server Set up

1. Create server directory using:

    `mkdir server`

2. 

 
TODO LIST
- Improve SEO (meta tags)
- Edit tailwind config to allow for easy dark mode/light mode transitions
- Edit temporary contact form. Currently using formsubmit, need to create react form handler and use nodemailer in server directory.
