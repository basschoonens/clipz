import { Timestamp } from '@angular/fire/firestore';

export interface IClip {
  docID?: string;
  uid: string;
  displayName: string;
  title: string;
  fileName: string;
  clipURL: string;
  screenshotURL: string;
  timestamp: Timestamp;
  screenshotFilename: string;
}
