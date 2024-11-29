# HausProject: React + TypeScript + Vite

This project, named HausProject, provides a minimal setup to get React working in Vite with Hot Module Replacement (HMR) and some ESLint rules. It uses TypeScript for type safety and Tailwind CSS for styling.

## Project Structure

The project has the following structure:

```
.eslintignore
.eslintrc
.gitignore
.prettierignore
.prettierrc
.vscode/
    settings.json
eslint.config.js
index.html
package.json
postcss.config.js
public/
    img/
README.md
src/
    API/
    App.tsx
    Components/
    Errors/
    index.css
    Layout/
        main.tsx
    main.tsx
    Models/
    Pages/
    Settings/
    Storage/
        Slices/
        store.ts
    vite-env.d.ts
tailwind.config.js
tsconfig.app.json
tsconfig.json
tsconfig.node.json
vite.config.ts
```

## Getting Started

Follow these steps to run the project successfully:

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/hausproject.git
   cd hausproject
   ```

2. **Install dependencies:**

   ```sh
   npm install
   ```

3. **Run the development server:**

   ```sh
   npm run dev
   ```

   This will start the Vite development server and open the project in your default browser.

4. **Build the project:**

   ```sh
   npm run build
   ```

   This will create a production-ready build of the project in the `dist` folder.

5. **Preview the production build:**

   ```sh
   npm run preview
   ```

   This will start a local server to preview the production build.

## Additional Information

- **Tailwind CSS:** The project uses Tailwind CSS for styling. The configuration can be found in `tailwind.config.js`.
- **TypeScript Configuration:** The TypeScript configuration files are `tsconfig.json`, `tsconfig.app.json`, and `tsconfig.node.json`.
- **ESLint Configuration:** The ESLint configuration files are `.eslintrc` and `eslint.config.js`.
- **Prettier Configuration:** The Prettier configuration files are `.prettierrc` and `.prettierignore`.

Feel free to explore the project and customize it according to your needs. If you have any questions or issues, please open an issue on the repository.
