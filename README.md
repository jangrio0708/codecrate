# CodeCrate

A free, static collection of everyday developer tools (JSON formatter, Base64 encoder/decoder, URL encoder/decoder, Lorem Ipsum generator, case converter, Markdown previewer, color converter, UUID generator), built to run entirely in the browser with zero backend and zero hosting cost.

## Deploying alongside ToolNest

This site is meant to be deployed as a **second repository** under the same GitHub account that already hosts `jangrio0708.github.io` (the ToolNest site), as a project page:

```bash
git init
git add .
git commit -m "Initial CodeCrate site"
git branch -M main
git remote add origin https://github.com/jangrio0708/codecrate.git
git push -u origin main
```

Then in the new repo on GitHub: **Settings → Pages → Source → Deploy from branch → main / (root)**. The site will be live at `https://jangrio0708.github.io/codecrate/`.

## Why a second repo instead of adding to the same one

GitHub Pages project sites are served at `username.github.io/<repo-name>/`. Keeping CodeCrate as its own repo:
- Keeps the two sites' git history and content independent
- Still benefits from AdSense being approved at the domain level (`jangrio0708.github.io`) — once that domain is approved, ad code on `/codecrate/*` pages doesn't need a separate review

## Note on robots.txt / sitemap.xml at this path

Search engines only read `robots.txt` from the domain root (`jangrio0708.github.io/robots.txt`), which belongs to the ToolNest repo — the copy in this repo (`/codecrate/robots.txt`) is mostly informational. If you want CodeCrate's sitemap picked up automatically, add a line to the root repo's `robots.txt`:

```
Sitemap: https://jangrio0708.github.io/codecrate/sitemap.xml
```

Otherwise, submit `https://jangrio0708.github.io/codecrate/sitemap.xml` directly in Google Search Console.

## No maintenance needed for

- Hosting (GitHub Pages is free indefinitely for public repos)
- The tools themselves (pure client-side JS, no dependencies)
- Content freshness (dev tools are evergreen, high-search-volume queries)

## AdSense

The AdSense verification script is already in every page's `<head>` (same publisher ID as ToolNest, since it's the same domain/account). Once AdSense approves the `jangrio0708.github.io` domain, replace the `<div class="ad-slot">` placeholders on each tool page with real `<ins class="adsbygoogle">` ad units.
