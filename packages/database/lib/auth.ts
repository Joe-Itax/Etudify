import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "../client.js";

const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
  },
  trustedOrigins: [
    "http://localhost:3000",
    "http://localhost:3001",
    "https://etudify.vercel.app",
    "https://etudify-admin.vercel.app",
  ],
  user: {
    additionalFields: {
      role: {
        type: "string",
        required: true,
        defaultValue: "PARENT",
      },
      searchableName: {
        type: "string",
        required: false,
        defaultValue: "",
      },
      isActive: {
        type: "boolean",
        required: true,
        defaultValue: true,
      },
      slug: {
        type: "string",
        required: true,
        defaultValue: "",
      },
    },
    changeEmail: {
      enabled: true,
    },
  },
});

export { auth };
