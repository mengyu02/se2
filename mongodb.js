
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://tb:<password>@cluster0.beobayy.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

// insert

async function createStudent(client, newStudent){
    const result = await client.db("project").collection("student").insertOne(newStudent);
    console.log(`New student created with the following id: ${result.insertedId}`);
}

createStudent(client,
    {
        name: "aaa bbb",
        email: "aaa.bbb@rutgers.edu"
    }
);

// query

// async function findOneStudentByName(client, nameOfStudent) {
//     const result = await client.db("project").collection("student").findOne({ name: nameOfStudent });

//     if (result) {
//         console.log(`Found a student in the collection with the name '${nameOfStudent}':`);
//         console.log(result);
//     } else {
//         console.log(`No students found with the name '${nameOfStudent}'`);
//     }
// }

// findOneStudentByName(client, "aaa bbb");