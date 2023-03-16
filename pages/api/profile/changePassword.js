import { getSession } from "next-auth/client";
import { checkPassword, hashPassword } from "../../../lib/auth";
import { dbConncect } from "../../../lib/db";

async function handler(req,res) {
  if (req.method !== "PATCH") {
    return;
  }

  const session = await getSession({ req: req });
  if (!session) {
    res.status(422).json("Not authenticated user");
    return;
  }

  const userEmail = session.user.email;
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  const client = await dbConncect();
  await client.connect();

  const db = client.db("nextAuth");
  const collection = db.collection("loginInfo");

  const existEmail = await collection.findOne({ email: userEmail });

  if (!existEmail) {
    res.status(201).json({ message: "Email Not found" });
    client.close();
    return;
  }

  const hasedPassword = existEmail.password;

  const verifyPassword = await checkPassword(oldPassword, hasedPassword);

  if (!verifyPassword) {
    res.status(403).json({ message: "Old password given incorrect" });
    return;
  }

  const newHassedPassword = await hashPassword(newPassword);

  const updateResult = await collection.updateOne(
    { email: userEmail },
    { $set: { password: newHassedPassword } }
  );

  res.status("201").json({message:"Password Updated" ,data:updateResult});
}

export default handler;
