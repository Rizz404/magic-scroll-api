import admin from "firebase-admin";

admin.initializeApp({
  ...(process.env.PRIVATE_KEY && { credential: admin.credential.cert({
    projectId: process.env.PROJECT_ID,
    privateKey: process.env.PRIVATE_KEY,
    clientEmail: process.env.CLIENT_EMAIL,
  }) }),
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
});

export const bucket = admin.storage().bucket();
