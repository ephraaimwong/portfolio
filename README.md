# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

Setting up React with Vite

1. Ensure nodeJS v18 and above.
   1. Check version `node -v`
   2. Update node
      1. Install NVM `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash **source** ~/.bashrc`
      2. Install latest LTS(Long Term Support) version of Node.js `nvm install --lts`
2. Change to Parent Repo
3. Create react app with vite
   1. `npm create vite@latest <repo-name>` -- creates a new repo with default setup inside current repo
4. `npm install` -- Install Dependencies
5. `npm run dev` -- Run script development command (found in package.json) to start local vite server

Boilerplate cleanup:

React (Single Page Application) Structure:

1. index.html is the SPA / landing page

## Deploying Vite React App to Github Pages

1. `npm install gh-pages --save-dev` -- Install gh-pages as dev dependency
2. Add the 2 scripts in `package.json` file
   ```
   "scripts": {  
       // ...
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
   }
   ```
3. Add base path (repo name) in `vite.config.js`
   ```
   // https://vitejs.dev/config/
   export default defineConfig({
   plugins: [react()],
   base: "/repoName",    <-------add base path here
   });
   ```
4. Configure Github Pages deploy from `gh-pages /root`
5. `npm run deploy` -- Deploy Vite React App build, since we are using gh-pages, we **DO NOT** need to re-run this command
