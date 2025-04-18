const env = import.meta.env;

export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: env['NG_APP_FIREBASE_API_KEY'],
    authDomain: env['NG_APP_FIREBASE_AUTH_DOMAIN'],
    projectId: env['NG_APP_FIREBASE_PROJECT_ID'],
    storageBucket: env['NG_APP_FIREBASE_STORAGE_BUCKET'],
    messagingSenderId: env['NG_APP_FIREBASE_MESSAGING_SENDER_ID'],
    appId: env['NG_APP_FIREBASE_APP_ID'],
  }
};
