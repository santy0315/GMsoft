import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {

  constructor(private firestore: AngularFirestore) { }
  agregarEstudiante(estudiante: any): Promise<any>{
    return this.firestore.collection('estudiantes').add(estudiante);
  }
}
