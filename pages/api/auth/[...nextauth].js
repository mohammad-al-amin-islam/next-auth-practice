import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { checkPassword } from "../../../lib/auth";
import { dbConncect } from "../../../lib/db";
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  session: {
    jwt: true,
  },
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const client = await dbConncect();
        await client.connect();

        const db = client.db("nextAuth");
        const collection = db.collection("loginInfo");

        const existEmail = await collection.findOne({
          email: credentials.email,
        });
        if (!existEmail) {
          client.close();
          throw new Error("No user found");
        }

        const isValid = await checkPassword(
          credentials.password,
          existEmail.password
        );
        if (!isValid) {
          client.close();
          throw new Error("Incorrect Password");
        }

        client.close();
        return {
          email: existEmail.email,
        };
      },
    }),
    GoogleProvider({
      clientId: '434292304388-e9k5f9oiruoacf4ukbot7pc34l6plcqd.apps.googleusercontent.com',
      clientSecret: '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',
    }),
  ],
});
