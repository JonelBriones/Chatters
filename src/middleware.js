export { default } from "next-auth/middleware";

// specify routes to protect that requires auth
export const config = {
  matcher: ["/create-tweet", "/profile"],
  // matcher: ["/", "/create-tweet", "/activity", "/search",'/profile'],
};
