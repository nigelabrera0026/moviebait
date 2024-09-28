# Movie Bait 🎥

**Movie Bait** is a web application built with **React** and **Vite** that allows users to search for movies and TV series, view trending content, and copy torrent magnet links. The app fetches movie data from the **YTS API**, and it supports both grid and list views for the movie display.

## Features

- **Search Movies and TV Series**: Search for movies and TV series based on a query.
- **Movies vs TV Series Filtering**: Users can choose between viewing movies or TV series by clicking on the appropriate buttons.
- **Trending Section**: The app provides a "Trending" option, which sorts movies by download count, showing the most popular movies.
- **Grid/List View**: Toggle between a grid view and list view to display movies in different formats.
- **Torrent Magnet Links**: Users can copy the magnet torrent link of any movie directly from the app.
- **Search Bar**: The search bar allows users to search for movies or TV series by name.

## Tech Stack

- **Frontend**: React (TypeScript), Axios for API requests, Vite for bundling
- **API**: YTS API (Yify Torrents)
- **CSS**: Custom styling using CSS (basic responsive grid system)


# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
