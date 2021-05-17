#

<p align="center">
  <img src="images/logo/logo.png" width="30%">
  <h1 align="center">Helps You Revive</h1>
</p>

## About

YogaVive is a local Yoga studio based on Khulna, Bangladesh. The owner reach out and ask me to build her a business landing page website for the small audiences she has, to promote her business as she has started taking her classes online, due to COVID-19. The main goal of this landing is to portrait what YogaVive stands for, what packages are available to join, what are the benefits, what results people got from YogaVive and of course the how to contact them.

## Technical Details

I've build this website using HTML, SASS and JavaScript (ES6+). As this website is fully customized to a business need and there are lots styles to write, I had to choose the CSS pre-processor **SASS(SCSS)** for organizations and maintainability. I have also followed **BEM CSS architecture** along with SCSS. But for writing and compile SCSS and Modular JavaScript, I needed a asset bundler. For that, I've chosen **Webpack** and built my own configuration files for the projects which will allow to create minified css and js, optimized images, auto generates favicon on production build and many more. This **webpack configuration** is also available as **[a standalone repo](https://github.com/Mr-spShuvo/webpack-static-workflow)**. The website is also fully responsive which also follows **the responsive images** principles and has a bottom mobile navigation menu. The **UI design** and **icon and image assets** has also been created from scratch, although some of them are inspired and downloaded from [freepik.com](https://freepik.com). The source files for all the assets are included in the `/images` directory. and And finally, **this project is hosted on Netlify** which allows the automatic deployment using CD/CI.

## Instructions

To run the project locally you have to install **`Nodejs`** version 10+. Clone the project and run `npm install` from the root directory to install all the dependencies for the project. The below command are available to run:

- `npm run dev` - will run the development server on `localhost:3000`
- `npm run build` - will build a optimized assets on `build` folder
- `npm run dist` - will build a production ready, optimized and minified assets on `/dist` folder

## Preview

This application is live @ **[yogavivebd.com](https://yogavivebd.com)**. Also a preview of the application has been included below:

<p align="center">
  <img src="screenshot.gif" alt="YogaVive Preview" title="YogaVive Preview">
</p>
