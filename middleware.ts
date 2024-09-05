import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from 'next/server'

const isProtectedRoute = createRouteMatcher(['/companies(.*)', '/chat(.*)']) //protect different routes
const isOnboardingRoute = createRouteMatcher(['/onboarding(.*)'])

export default clerkMiddleware((auth, req: NextRequest) => {

  const { userId, sessionClaims, redirectToSignIn } = auth()
  //if the user is already onboarded just get them out of here
  if (userId && isOnboardingRoute(req)) {
    return NextResponse.next()
  }

  //if the user is not signed in and they try to access a protected route, send them to the sign in page  
  if(!userId && isProtectedRoute(req)) return redirectToSignIn({ returnBackUrl: req.url })

    //if the user is signed in and they haven't completed the onboarding process, send them to the onboarding page
  if (userId && !sessionClaims?.metadata?.onboardingComplete) {
      const onboardingUrl = new URL('/onboarding', req.url)
      return NextResponse.redirect(onboardingUrl)
  }


  //if the user is signed in and they try to access the onboarding route, send them to the home page




});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
