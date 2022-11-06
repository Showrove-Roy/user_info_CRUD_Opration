const express = require("express");
const app = express();
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// mongo db connect code
const uri =
  "mongodb+srv://dbUser1:TDj8KmPX2GoIqJCA@cluster0.in3ib7y.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const usersList = client.db("simpleNodeCRUD").collection("New_Users_List");

    app.post("/users", async (req, res) => {
      const user = req.body;
      const result = await usersList.insertOne(user);
      console.log(result);
      res.send(result);
    });
  } finally {
  }
}

run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("This simple crud server is running");
});

app.listen(port, () => {
  console.log(`This server running on Port: ${port}`);
});
