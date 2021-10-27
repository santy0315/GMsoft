import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-profesores',
  templateUrl: './lista-profesores.component.html',
  styleUrls: ['./lista-profesores.component.css']
})
export class ListaProfesoresComponent implements OnInit {

  listaProfesores: Observable<any[]> | any;
  constructor(firestore: AngularFirestore) {
    this.listaProfesores = firestore.collection("profesores").valueChanges();
   }
   ngOnInit(): void {
  }
}
