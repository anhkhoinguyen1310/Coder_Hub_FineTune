# GitHub Search Application

A React application that allows users to search for GitHub repositories and users, view repository READMEs, and toggle between light and dark themes. The application utilizes the GitHub API to fetch data and provides a user-friendly interface with pagination, search functionality, and theme toggling.

## 📋 Table of Contents

1. 🤖 [Introduction](#introduction)
2. 🔋 [Features](#features)
3. ⚙️ [Tech Stacks](#technologies-used)
4. 🤸 [Getting Started](#getting-started)
5. 🛠️ [Project Structure](#project-structure)
6. 🚀 [Deployment](#deployment)
7. 🔍 [Usage](#usage)
8. 🎨 [Customization](#customization)
9. 🐛 [Troubleshooting](#troubleshooting)
10. 🤝 [Contributing](#contributing)

## 🤖 <a name="introduction"></a> Introduction

The GitHub Search Application is a React-based project that allows users to:
- Search for GitHub repositories and users.
- View repository READMEs.
- Toggle between light and dark themes.

This project utilizes the GitHub API to fetch relevant data, providing a seamless user experience with features like pagination, theme toggling, and a responsive design.

## 🔋 <a name="features"></a> Features

- **Search Repositories and Users**: Enter a search term to find matching GitHub repositories and users.
- **View Repository README**: Click on a repository to view its README directly within the application.
- **Pagination**: Navigate through search results using pagination controls.
- **Dark Mode**: Toggle between light and dark themes, with the theme preference saved in `localStorage`.
- **Responsive Design**: Works well on various screen sizes.

## ⚙️ <a name="technologies-used"></a> Tech Stacks

- **React**: Front-end library for building user interfaces.
- **React Bootstrap**: UI components for styling and layout.
- **GitHub API**: To fetch repositories, users, and READMEs.
- **LD Element Spinners (ldrs)**: For displaying loading spinners.
- **Netlify**: For deployment and hosting.

## 🤸 <a name="getting-started"></a> Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)

### Installation

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/github-search-app.git
   ```

2. **Navigate to the Project Directory**

   ```bash
   cd github-search-app
   ```

3. **Install Dependencies**

   ```bash
   npm install
   ```

4. **Running the Application**

   To start the application in development mode:

   ```bash
   npm start
   ```

   This will run the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

5. **Building for Production**

   To build the app for production:

   ```bash
   npm run build
   ```

   This will create a `build` directory with the production build of your app.

## 🛠️ <a name="project-structure"></a> Project Structure

```css
src/
├── App.css
├── App.js
├── components/
│   ├── DarkMode/
│   │   ├── DarkMode.css
│   │   ├── Moon.svg
│   │   ├── Sun.svg
│   │   └── DarkMode.js
│   ├── NaviBar.js
│   └── PaginationBar.js
├── index.css
├── index.js
└── ...
```

### Key Components

- **App.js**: The main application component that manages state and handles API calls.
- **NaviBar.js**: Contains the navigation bar, search form, and theme toggle.
- **PaginationBar.js**: Handles pagination controls for navigating search results.
- **DarkMode.js**: Manages the dark mode toggle and theme persistence.
- **index.css**: Global CSS styles and CSS variables for theming.

## 🚀 <a name="deployment"></a> Deployment

The application can be deployed to Netlify or any other static site hosting service.

### Deploying to Netlify

1. **Build the Application**

   ```bash
   npm run build
   ```

2. **Configure Redirects**

   Ensure you have a `_redirects` file in your `public` directory with the following content to handle client-side routing:

   ```bash
   /*    /index.html   200
   ```

3. **Push to GitHub**

   Commit your changes and push the code to a GitHub repository.

4. **Create a New Site on Netlify**

   - Log in to Netlify and select **New site from Git**.
   - Connect your GitHub repository.
   - Configure the build settings:
     - **Build Command**: `npm run build`
     - **Publish Directory**: `build`
   - Deploy the site.

## 🔍 <a name="usage"></a> Usage

### Searching for Repositories and Users

1. Enter a search term in the search bar.
2. Click on **Search** or press **Enter**.
3. The application displays matching repositories and users.
4. Navigate through results using the pagination controls.

### Viewing Repository README

- Click on a repository from the search results.
- The application fetches and displays the repository's README.
- The URL updates to reflect the repository path (e.g., `/owner/repo`).

### Toggling Dark Mode

- Use the toggle switch in the navigation bar to switch between light and dark themes.
- The application saves your theme preference, which persists across sessions.

## 🎨 <a name="customization"></a> Customization

### Styling and Theming

- **CSS Variables**: The application uses CSS variables for theming. Modify `index.css` to adjust colors and styles.
- **Component Styles**: Customize component-specific styles in their respective CSS files.

### Adding Features

- **Error Handling**: Enhance error handling for API requests.
- **User Profiles**: Implement detailed user profiles when a user is clicked.
- **Responsive Design**: Improve responsiveness and mobile layouts.

## 🐛 <a name="troubleshooting"></a> Troubleshooting

### Common Issues

- **API Rate Limit Exceeded**: You may encounter a rate limit if making too many requests. Consider authenticating your API requests.
- **Routing Issues on Deployment**: Ensure the `_redirects` file is correctly configured to handle client-side routing.
- **Theme Toggle Not Syncing**: Verify that the **DarkMode** component uses `useState` and `useEffect` to manage theme state.

## 🤝 <a name="contributing"></a> Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the Repository**

2. **Create a New Branch**

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Commit Your Changes**

   ```bash
   git commit -m "Add your message"
   ```

4. **Push to the Branch**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request**
