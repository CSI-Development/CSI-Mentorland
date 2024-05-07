import NextAuth from "next-auth";

import GoogleProvider from "next-auth/providers/google"

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: "14019422909-s2unlugqt39gufss9qkqdvph4h69m0pt.apps.googleusercontent.com" as string,
      clientSecret: "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" as string,
    }),
  ],
});
export { handler as GET, handler as POST };
