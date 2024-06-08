export const authRoutes: (string | RegExp)[] = [
  "/login",
  /^\/login.*$/,
  "/register",
  /^\/register.*$/,
];
export const publicRoutes: (string | RegExp)[] = ["/works"];
export const protectedRoutes: (string | RegExp)[] = [/^\/admin.*$/];
// export const app = {
//   session: {
//     expirationTime: process.env.SESSION_EXPIRATION_TIME!,
//     secret: process.env.SESSION_SECRET!,
//   },
// };
export const database = {
  url: process.env.DATABASE_URL!,
};
