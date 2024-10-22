
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const serviceAccount = require('./key.json');

initializeApp({
  credential: cert(serviceAccount)
});


// const db = getFirestore();

// add

// const docRef = db.collection('student').doc();

// docRef.set({
//   first: 'ccc',
//   last: 'ddd',
//   email: 'ccc.ddd@rutgers.edu'
// }
// );

// // read all data

// async function readAll() {
//   const snapshot = await db.collection('student').get();
//   snapshot.forEach((doc) => {
//     console.log(doc.id, '=>', doc.data());
//   });
// }

// readAll();

const db = getFirestore();

// Add a document to the 'student' collection
async function addStudent() {
  const docRef = db.collection('student').doc(); // Automatically generate a new document ID
  await docRef.set({
    first: 'John',
    last: 'Doe',
    email: 'john.doe@rutgers.edu'
  });
  console.log('Student added successfully');
}

// Read all documents from the 'student' collection
async function readAll() {
  const snapshot = await db.collection('student').get();
  if (snapshot.empty) {
    console.log('No students found.');
    return;
  }
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());
  });
}

// Run both functions in sequence
async function run() {
  // await addStudent(); // Add a new student to the Firestore database
  await readAll(); // Read all documents from the 'student' collection
}

run().catch(console.error);