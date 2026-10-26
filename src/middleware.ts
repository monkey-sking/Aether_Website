import { defineMiddleware } from "astro:middleware";
import { defaultLang, languages } from "./i18n/ui";

const validLocales = new Set(Object.keys(languages));
const englishPrefix = /^\/en(?=\/|$)/;

export const onRequest = defineMiddleware((context, next) => {
  const lang = context.params.lang;

  // Only the localized dynamic routes can receive an arbitrary first segment.
  if (!lang || !context.routePattern.startsWith("/[lang]")) {
    return next();
  }

  if (lang === defaultLang) {
    const url = new URL(context.url);
    url.pathname = url.pathname.replace(englishPrefix, "") || "/";
    return context.redirect(`${url.pathname}${url.search}`, 301);
  }

  if (!validLocales.has(lang)) {
    return new Response(null, {
      status: 404,
      headers: { "X-Robots-Tag": "noindex" },
    });
  }

  if (context.url.pathname === `/${lang}`) {
    return context.redirect(`/${lang}/${context.url.search}`, 301);
  }

  return next();
});
