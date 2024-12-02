import type { NextRequest } from "next/server";
// import { NextResponse } from "next/server";

// import { i18n } from "./i18n-config";

// export function middleware(request: NextRequest) {
//   // Get the pathname of the request (e.g. /, /products, /fr/products)
//   const pathname = request.nextUrl.pathname;

//   // Check if the pathname starts with a locale
//   const pathnameHasLocale = i18n.locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
//   );

//   console.log("pathnameHasLocale", pathnameHasLocale);
//   console.log(i18n.defaultLocale);

//   if (!pathnameHasLocale) {
//     request.nextUrl.pathname = `/${i18n.defaultLocale}`;
//     return NextResponse.redirect(request.nextUrl);
//   }

//   // return NextResponse.next();
// }

import { i18nRouter } from "next-i18n-router";
import { i18nConfig } from "./i18nConfig";

export function middleware(request: NextRequest) {
  return i18nRouter(request, i18nConfig);
}

export const config = {
  // only applies this middleware to files in the app directory
  matcher: "/((?!api|static|.*\\..*|_next).*)",
};
