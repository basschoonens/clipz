import { Injectable, inject } from '@angular/core';
import { Firestore , addDoc, collection } from '@angular/fire/firestore';
import { IClip } from '../models/clip.model';

@Injectable({
  providedIn: 'root'
})
export class ClipService {
  #firestore = inject(Firestore);
  #clipsCollection = collection(this.#firestore, 'clips');

  constructor() { }

  async createClip(data: IClip) {
    return await addDoc(this.#clipsCollection, data);
  }
}
