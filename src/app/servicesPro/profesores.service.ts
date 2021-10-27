import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfesoresService {

  constructor(private firestore: AngularFirestore) { }
  agregarProfesor(profesor: any): Promise<any>{
    return this.firestore.collection('profesores').add(profesor);
  }
}
