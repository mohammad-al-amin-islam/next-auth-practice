const { MongoClient, ServerApiVersion } = require("mongodb");

export async function dbConncect() {
  const uri =
    "mongodb+srv://alamin:0TLhl4K3s4hXlspD@cluster0.t50bvmm.mongodb.net/?retryWrites=true&w=majority";
  const client =new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: ServerApiVersion.v1,
  });

  return client;
}
