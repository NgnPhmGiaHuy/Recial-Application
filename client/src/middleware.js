// import { NextResponse } from 'next/server';
//
// export function middleware(req) {
//     const userAgent = req.headers.get('user-agent');
//     const isMobile = /mobile/i.test(userAgent);
//
//     // Clone the request URL and add isMobile status for debugging
//     const url = req.nextUrl.clone();
//     url.searchParams.set('isMobile', isMobile);
//
//     if (isMobile) {
//         // Redirect mobile users
//         return NextResponse.rewrite(new URL(`/mobile?isMobile=${isMobile}`, req.url));
//     } else {
//         // Redirect desktop users
//         return NextResponse.rewrite(new URL(`/desktop?isMobile=${isMobile}`, req.url));
//     }
// }
//
// export const config = {
//     matcher: ['/'],  // Applies to all pages, excluding API and static assets
// };


export function middleware() {

}