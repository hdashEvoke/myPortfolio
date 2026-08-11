# MyPortfolio - Angular Portfolio Project

An Angular-based portfolio website showcasing skills, projects, and professional experience. This project demonstrates Angular best practices and modern web development techniques.

## Features

- Responsive design for all devices
- Modern, clean UI
- Navigation with Angular Router
- Multiple sections: Home, About, Projects, Skills, and Contact
- Component-based architecture

## Prerequisites

- Node.js (v20.x or higher)
- npm (v10.x or higher)
- Angular CLI (v20.x or higher)

## Installation

```bash
npm install
```

## Development Server

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Build

Build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

Execute the unit tests:

```bash
npm test
```

## Project Structure

```
src/
├── app/
│   ├── components/     # Portfolio components
│   ├── app.ts         # Root component
│   ├── app.routes.ts  # Routing configuration
│   └── app.config.ts  # App configuration
├── assets/            # Static assets
├── index.html         # Main HTML file
└── styles.css         # Global styles
```

## Technologies Used

- Angular 20.x
- TypeScript
- CSS3
- HTML5

## License

MIT License