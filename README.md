# Aether Website

<!-- badges:start -->
[![Stars](https://img.shields.io/github/stars/monkey-sking/Aether_Website?style=flat-square)](https://github.com/monkey-sking/Aether_Website/stargazers) [![Forks](https://img.shields.io/github/forks/monkey-sking/Aether_Website?style=flat-square)](https://github.com/monkey-sking/Aether_Website/network/members) [![Last commit](https://img.shields.io/github/last-commit/monkey-sking/Aether_Website?style=flat-square)](https://github.com/monkey-sking/Aether_Website/commits/main) [![Language](https://img.shields.io/github/languages/top/monkey-sking/Aether_Website?style=flat-square)](https://github.com/monkey-sking/Aether_Website/search?l=)
<!-- badges:end -->

Astro-based website for Aether.

## Purpose

- Product landing page
- Pricing page
- Download page
- FAQ
- Public Beta page
- Stable / Beta appcast hosting

## Routes

- `/`
- `/download`
- `/pricing`
- `/faq`
- `/beta`
- `/privacy`
- `/terms`
- `/changelog`

Chinese localized versions are also generated under `/zh-hans/...`.

## Build

```bash
npm run build
```

## Notes

- Stable appcast: `public/aether/appcast.xml`
- Beta appcast: `public/aether-beta/appcast.xml`
- Release DMGs are synced into `public/download/` and `public/beta/` by the Aether app release flow
