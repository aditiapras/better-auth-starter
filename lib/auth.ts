import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "./prisma";
import { nextCookies } from "better-auth/next-js";
import { admin } from "better-auth/plugins";

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  plugins: [nextCookies(), admin()],
  session: {
    cookieCache: {
      enabled: true,
      maxAge: 300,
    },
  },
  trustedOrigins: [
    process.env.BETTER_AUTH_URL!,
    process.env.BETTER_AUTH_URL + "/d",
    process.env.BETTER_AUTH_URL + "/sign-in",
    process.env.BETTER_AUTH_URL + "/sign-up",
  ],
  advanced: {
    cookiePrefix: "better-auth-cpanel",
  },
});
