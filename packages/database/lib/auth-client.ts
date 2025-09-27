import { createAuthClient } from "better-auth/react";
import { inferAdditionalFields } from "better-auth/client/plugins";

import type { auth } from "./auth.js";

// Utilisation de ReturnType pour inférer le type de retour de createAuthClient
type AuthClientType = ReturnType<typeof createAuthClient>;

export const authClient: AuthClientType = createAuthClient({
  plugins: [inferAdditionalFields<typeof auth>()],
});
