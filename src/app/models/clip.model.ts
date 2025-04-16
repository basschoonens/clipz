import { Timestamp } from '@angular/fire/firestore';

export interface IClip {
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  clipURL: string;
  timestamp: Timestamp;
}
