# Kamal Uddin — Personal Portfolio

A responsive, dark cybersecurity portfolio for Kamal Uddin.

## Included
- Responsive single-page portfolio
- Hero / About / Experience / Skills
- Selected projects
- Live public GitHub repository section
- Security research
- Education & certifications
- Languages
- Contact section
- Downloadable CV
- No build system required

## Run locally

Open `index.html` directly in a browser, or use a local server:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.

## Deploy

### GitHub Pages
1. Create a repository such as `DarkHacker420.github.io`.
2. Upload all files from this folder.
3. Enable GitHub Pages from repository Settings → Pages.
4. Select the branch containing `index.html`.

### Netlify / Vercel
Upload/import the folder as a static site. No build command is required.

## Notes
- The repository section uses the public GitHub API and loads the repositories dynamically.
- Update contact/social links in `index.html` if you want to add LinkedIn, YouTube, X, or a custom domain.
- The CV included in `assets/` is the supplied document.
