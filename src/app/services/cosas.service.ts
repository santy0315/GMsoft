import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CosasService {

  constructor(private firestore: AngularFirestore) { }
  agregarCosa(cosa: any): Promise<any>{
      return this.firestore.collection('cosas').add(cosa);
  }
}
