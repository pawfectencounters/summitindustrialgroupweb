# Summit Industrial Group — Website

Professional website for Summit Industrial Group, a warehouse racking design, installation, repair, and storage consulting company.

## Features

- **Trilingual (EN / 中文 / ES)** — English, Chinese, and Spanish with one-click switching. Language preference is saved in localStorage.
- **Responsive** — Mobile-first layout, works on all screen sizes.
- **5 Sections** — Hero, Services, Process, Why Us, Contact/Quote form.
- **Original SVG imagery** — All 9 images are custom-built SVG illustrations, no external image dependencies.
- **No dependencies** — Pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools required.
- **GitHub Pages ready** — Deploy instantly with zero configuration.

## Project Structure

```
summit-industrial-group/
├── index.html
├── css/
│   └── style.css
├── js/
│   └── main.js
├── images/
│   ├── hero-warehouse.svg
│   ├── svc-racking-design.svg
│   ├── svc-installation.svg
│   ├── svc-repair.svg
│   ├── svc-consulting.svg
│   ├── proc-assessment.svg
│   ├── proc-installation.svg
│   ├── proc-completed.svg
│   └── why-warehouse.svg
└── README.md
```

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Settings → Pages → Deploy from branch → main → / (root)
3. Live at `https://yourusername.github.io/summit-industrial-group/`

## Custom Domain

Add a `CNAME` file with your domain name, e.g. `www.summitindustrialgroup.com`

## Customization

**Contact info** — search and replace in `index.html`:
- `info@summitindustrialgroup.com`
- `+1 (555) 000-0000`

**Colors** — CSS variables in `css/style.css`:
```css
:root {
  --navy:    #1b3d5f;
  --navy-dk: #0f2540;
  --navy-lt: #2c5f96;
}
```

**Add a language** — add `data-xx="..."` to all elements with `data-en`, add a button `<button class="lang-btn" onclick="setLang('xx')">XX</button>`, and add a placeholder case in `js/main.js`.

## Form Handling

Front-end only by default. To receive real submissions:
- **Formspree** — add `action="https://formspree.io/f/YOUR_ID"` to a `<form>` tag
- **Netlify Forms** — add `netlify` attribute to the form
- **EmailJS** — call their API inside `submitForm()` in `js/main.js`

## License

© 2025 Summit Industrial Group. All rights reserved.
