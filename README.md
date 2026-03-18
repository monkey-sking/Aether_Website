# Aether Website

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
