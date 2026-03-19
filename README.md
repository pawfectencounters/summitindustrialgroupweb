# Summit Industrial Group — Website

Professional website for Summit Industrial Group, a warehouse racking design, installation, repair, and storage consulting company.

## Features

- **Bilingual (EN / 中文)** — Full English and Chinese language support with one-click switching. Language preference is saved in localStorage.
- **Responsive** — Mobile-first layout, works on all screen sizes.
- **5 Sections** — Hero, Services, Process, Why Us, Contact/Quote form.
- **No dependencies** — Pure HTML, CSS, and vanilla JavaScript. No frameworks or build tools required.
- **GitHub Pages ready** — Deploy instantly with zero configuration.

## Project Structure

```
summit-industrial-group/
├── index.html          # Main HTML file
├── css/
│   └── style.css       # All styles
├── js/
│   └── main.js         # Language switching, form, scroll animations
├── images/             # Place your own images here
│   └── .gitkeep
└── README.md
```

## Getting Started

### Run locally
Just open `index.html` in any browser — no server or build step needed.

### Deploy to GitHub Pages
1. Push this repository to GitHub
2. Go to **Settings → Pages**
3. Set source to **Deploy from a branch → main → / (root)**
4. Your site will be live at `https://yourusername.github.io/summit-industrial-group/`

### Deploy to custom domain
1. Add a `CNAME` file to the repo root containing your domain, e.g.:
   ```
   www.summitindustrialgroup.com
   ```
2. Point your DNS to GitHub Pages (follow GitHub's documentation)

## Customization

### Update contact info
In `index.html`, search for and replace:
- `info@summitindustrialgroup.com` → your email
- `+1 (555) 000-0000` → your phone number
- `Mon–Fri, 8:00 AM – 5:00 PM` → your hours

### Update stats (Hero section)
Search for `stat-num` in `index.html` and update the numbers (500+, 10+, 100%, 48h).

### Replace images
Current images use Unsplash URLs. To use your own:
1. Add images to the `/images/` folder
2. Replace `https://images.unsplash.com/...` URLs in `index.html` with `images/your-image.jpg`

### Colors
All colors are defined as CSS variables in `css/style.css`:
```css
:root {
  --navy:    #1b3d5f;   /* Primary navy */
  --navy-dk: #0f2540;   /* Dark navy (nav, footer) */
  --navy-lt: #2c5f96;   /* Light navy (CTA button) */
  --muted:   #6a8aaa;   /* Muted text */
}
```

### Add a language
To add a third language (e.g., Spanish):
1. Add `data-es="..."` attributes to all elements that have `data-en`
2. Add a button in the `.lang-switcher` div: `<button class="lang-btn" data-lang="es">ES</button>`
3. Update the placeholder map in `js/main.js`

## Form Handling

The contact form currently shows a success message on submit (front-end only). To receive actual submissions, integrate one of:

- **Formspree** — Add `action="https://formspree.io/f/YOUR_ID"` to a `<form>` tag
- **EmailJS** — Call their API on submit
- **Netlify Forms** — Add `netlify` attribute if hosting on Netlify
- **Your own backend** — POST to your API endpoint in `main.js → submitForm()`

## Browser Support

Chrome, Firefox, Safari, Edge (last 2 versions). IE not supported.

## License

© 2025 Summit Industrial Group. All rights reserved.
