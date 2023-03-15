import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { checkPassword } from "../../../lib/auth";
import { dbConncect } from "../../../lib/db";

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
          throw new Error("Could not log you in");
        }

        client.close();
        return {
          email: existEmail.email,
        };
      },
    }),
  ],
});
