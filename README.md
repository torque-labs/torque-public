# Torque Public Repository

The official [Turborepo](https://turborepo.org/) repository for public Torque projects.

### Apps
- `web`: A Next.js app to demonstrate the Torque UI and SDK integration

### Packages
- `ui`: The official Torque UI Kit library

### Config Packages
- `eslint-config`: ESLint configurations for Torque projects
- `tailwind-config`: Tailwind CSS configurations for Torque projects
- `typescript-config`: TypeScript configurations for Torque projects


## Usage
### Installing Dependencies
To install all of the packages, run the following command from the root of the repository:
```
npm install
```
This will install all of the dependencies for every package and app in the repository.

### Development
To start the development server for all of the apps and packages, run the following command from the root of the repository:
```
npm run dev
```
To start the development server for a specific package or app, navigate to the package or app directory and run the dev command there (`npm run dev`).

### Building packages
To build all of the apps and packages, run the following command from the root of the repository:
```
npm run build
```
If you want to build a specific package or app, navigate to the package or app directory and run the build command there (`npm run build`).

### Running production locally (requires build)
After building the apps and packages, you can run the production server locally. This will start the Next.js server for each app.

To run the production server locally, run the following command from the root of the repository:
```
npm run start  
```
To run the production server for a specific app, navigate to the package or app directory and run the start command there (`npm run start`).

****NOTE:*** Packages do not have a start command as they are not meant to be run as a standalone server.*