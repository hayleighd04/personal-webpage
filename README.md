# Hayleigh Daughtrey — Personal Website

Built with React + Vite. Deployed via GitHub Pages.

## Project Structure

```
src/
  components/
    Nav.jsx / Nav.module.css
    Hero.jsx / Hero.module.css
    About.jsx / About.module.css
    Projects.jsx / Projects.module.css
    Skills.jsx / Skills.module.css
    Contact.jsx / Contact.module.css
    Footer.jsx / Footer.module.css
  App.jsx
  main.jsx
  index.css        ← global styles & design tokens
index.html
vite.config.js
```

## Local Development

```bash
npm install
npm run dev
```

Then open http://localhost:5173

## Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the project and pushes to the `gh-pages` branch automatically.
Make sure GitHub Pages is set to deploy from the `gh-pages` branch in your repo settings.

## Adding a New Project

Open `src/components/Projects.jsx` and add an entry to the `projects` array:

```js
{
  tag: '🚀 Your Tag Here',
  title: 'Project Name',
  desc: 'What it does and how you built it.',
  stack: ['Tech1', 'Tech2'],
  link: 'https://github.com/hayleighd04/your-repo', // or null
}
```

## Customization Tips

- **Colors / fonts**: Edit CSS variables in `src/index.css`
- **Skills**: Edit the `skillGroups` array in `Skills.jsx`
- **Experience**: Edit the `experience` array in `Skills.jsx`
- **Contact links**: Edit the `links` array in `Contact.jsx`
- **Resume**: Drop your PDF in the `public/` folder and update the link in `About.jsx`
