import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent implements OnInit {
  listaEstudiantes: Observable<any[]> | any;
  constructor(firestore: AngularFirestore) {
    this.listaEstudiantes = firestore.collection("estudiantes").valueChanges();
   }

  ngOnInit(): void {
  }

}
