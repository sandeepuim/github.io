# Sandip Sahu — Portfolio

A static portfolio built with HTML, CSS, and JavaScript. No package installation or build step is required.

## Run locally

Open `index.html` in a browser for a quick local preview. For an HTTP preview, start a local web server from the project folder:

```powershell
python -m http.server 8000
```

Open <http://localhost:8000/>. You can also open `index.html` directly, but a local server more closely matches how GitHub Pages serves the site.

## Deploy to GitHub Pages

1. Push the site files and `Sandip_Sahu_Full_Stack_Developer.docx` to the repository's `main` branch.
2. In GitHub, open **Settings → Pages**.
3. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
4. Wait for the Pages deployment to finish. GitHub will show the published URL in the Pages settings.

The stylesheet, script, section links, and CV download all use relative paths or same-page anchors, so they work from the domain root and from a repository subpath without a framework-specific base-path setting.
