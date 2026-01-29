import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

//! We need to CONFIGURE clerkMiddleware:
//* (1) clerkMiddleware will need to have a list of routes that are protected --> this is the only custom part (the rest of the file is template code, works for any app)
const isProtectedRoute = createRouteMatcher(["/timeline", "/profile/(.*)"]);

//* (2) clerkMiddleware will compare the route from the list and the current route the user is navigating to
// --> if the current route matches one from the list, it will trigger auth check
//NOTE:  the 'auth' here is simply a PARAMETER name, it is NOT the auth OBJECT
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) await auth.protect();
});

//* The below is written in reg(ex) --> language created to find matches
// We have have used reg(ex) syntax before when using the "*" symbol, which means "anything"
// Learn more on: https://regexr.com/

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
