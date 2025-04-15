import {ApplicationConfig, provideZoneChangeDetection} from '@angular/core';
import {provideRouter} from '@angular/router';
import {provideFirebaseApp, initializeApp} from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

import {routes} from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({eventCoalescing: true}),
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp({
      apiKey: "AIzaSyCP606Y8TOJe2gJ1nGlx8DKO8srefV89P8",
      authDomain: "clipz-ed2dd.firebaseapp.com",
      projectId: "clipz-ed2dd",
      storageBucket: "clipz-ed2dd.firebasestorage.app",
      messagingSenderId: "705424356609",
      appId: "1:705424356609:web:fbe957d58c98b0e12a5700"
    })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    ],
};
