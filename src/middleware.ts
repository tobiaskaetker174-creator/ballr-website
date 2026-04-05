import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSWORD = "Tobias123";
const COOKIE_NAME = "auth_token";
const AUTH_VALUE = "authenticated_tobias";

export function middleware(request: NextRequest) {
  // Allow API routes and static files
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.startsWith("/api/auth") ||
    request.nextUrl.pathname === "/favicon.ico" ||
    request.nextUrl.pathname === "/how-it-works" ||
    request.nextUrl.pathname === "/faq"
  ) {
    return NextResponse.next();
  }

  // Check auth cookie
  const authCookie = request.cookies.get(COOKIE_NAME);
  if (authCookie?.value === AUTH_VALUE) {
    return NextResponse.next();
  }

  // Check if this is a login attempt
  if (request.nextUrl.pathname === "/api/login") {
    return NextResponse.next();
  }

  // Check URL param for password
  const password = request.nextUrl.searchParams.get("password");
  if (password === PASSWORD) {
    const response = NextResponse.redirect(new URL(request.nextUrl.pathname, request.url));
    response.cookies.set(COOKIE_NAME, AUTH_VALUE, { 
      httpOnly: true, 
      secure: true, 
      sameSite: "lax",
      maxAge: 60 * 60 * 24 * 30 // 30 days
    });
    return response;
  }

  // Return login page
  return new NextResponse(
    `<!DOCTYPE html>
<html><head><title>Login Required</title>
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
*{margin:0;padding:0;box-sizing:border-box}
body{min-height:100vh;display:flex;align-items:center;justify-content:center;background:#0a0a0a;font-family:system-ui,-apple-system,sans-serif;color:#fff}
.card{background:#141414;border:1px solid #222;border-radius:16px;padding:40px;max-width:380px;width:90%;text-align:center}
h1{font-size:24px;margin-bottom:8px}
p{color:#888;font-size:14px;margin-bottom:24px}
input{width:100%;padding:12px 16px;border-radius:10px;border:1px solid #333;background:#1a1a1a;color:#fff;font-size:16px;outline:none;margin-bottom:16px}
input:focus{border-color:#666}
button{width:100%;padding:12px;border-radius:10px;border:none;background:#fff;color:#000;font-size:16px;font-weight:600;cursor:pointer}
button:hover{background:#ddd}
.error{color:#ff4444;font-size:13px;margin-bottom:12px;display:none}
</style></head><body>
<div class="card">
<h1>🔒</h1>
<p>Password required</p>
<div class="error" id="err">Wrong password</div>
<form onsubmit="return tryLogin()">
<input type="password" id="pw" placeholder="Enter password" autofocus>
<button type="submit">Enter</button>
</form>
</div>
<script>
function tryLogin(){
var p=document.getElementById("pw").value;
if(p){window.location.href=window.location.pathname+"?password="+encodeURIComponent(p)}
return false;
}
</script>
</body></html>`,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
