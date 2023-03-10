import * as admin from 'firebase-admin'

const serviceAccount = require('../../firebase/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/**
 * Create a new user given their phone number
 */
export default function createUser(number: string) {
  admin.auth().createUser({
    phoneNumber: number
  })
  .then((userRecord) => {
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user: ', error)
  });
}