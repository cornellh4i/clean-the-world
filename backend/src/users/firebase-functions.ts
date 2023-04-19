import * as admin from 'firebase-admin'

const serviceAccount = require('../../firebase/serviceAccountKey.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

/**
 * Create a new user given their phone number
 */
export function createUser(number: string) {
  const customClaims = {
    dataEntry: true
  };
  admin.auth().createUser({
    phoneNumber: number
  })
  .then((userRecord) => {
    admin.auth().setCustomUserClaims(userRecord.uid, customClaims);
    console.log('Successfully created new user:', userRecord.uid);
  })
  .catch((error) => {
    console.log('Error creating new user: ', error)
  });
}