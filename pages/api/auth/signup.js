import { hashPassword } from "../../../lib/auth";
import { dbConncect } from "../../../lib/db";

async function handler(req, res) {
  if (!req.method === "POST") {
    return
  }
//   const { data } = req.body.emai;

  const email = req.body.email;
  const password = req.body.password;

  if (
    !email ||
    !email.includes("@") ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({ message: "Invalid email or password" });
    return;
  }

  const hasedPassword = await hashPassword(password);
  const loginInfo = {
    email: email,
    password: hasedPassword,
  };

  const client = await dbConncect();

  await client.connect();

  const db = client.db("nextAuth");
  const collection = db.collection("loginInfo");

  const existEmail = await collection.findOne({email:email});
  if(existEmail){
    res.status(201).json({ message: "User exist already" });
    client.close();
    return
  }

  const result = await collection.insertOne(loginInfo);
  res.status(201).json({ message: result });
}
export default handler;
