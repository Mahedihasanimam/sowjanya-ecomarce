// middleware.js

import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");
  const role = request.cookies.get("role");
  const url = request.nextUrl.clone();

  console.log("Middleware: role and token", role, token);

  // Protect the home route ("/") for USER
  if (url.pathname === "/" && role?.value !== "USER" && !token?.value) {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }
  if (
    url.pathname === "/" &&
    role?.value !== "USER" &&
    role?.value === "ADMIN"
  ) {
    url.pathname = "/dashboard";
    return NextResponse.redirect(url);
  }

  // Protect the dashboard route ("/dashboard") for ADMIN
  if (
    url.pathname === "/dashboard" &&
    role?.value !== "ADMIN" &&
    token?.value
  ) {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }

  // Redirect unauthenticated users to the signin page
  if (!token?.value || !role?.value) {
    url.pathname = "/auth/signin";
    return NextResponse.redirect(url);
  }
}

export const config = {
  matcher: ["/", "/dashboard"], // Apply middleware to these routes
};
