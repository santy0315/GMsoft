import { EstudiantesService } from './../../servicesEst/estudiantes.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css']
})
export class NuevoEstudianteComponent implements OnInit {
  createEstudiante: FormGroup;
  enviado = false;


  constructor(private fb: FormBuilder, private estudianteService: EstudiantesService) {
    this.createEstudiante = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    }
    );
  }

  ngOnInit(): void {
  }

  agregarEstudiante() {
    this.enviado = true;

    if (this.createEstudiante.invalid) {
      return;
    }
    const estudiante: any = {
      nombre: this.createEstudiante.value.nombre,
      edad: this.createEstudiante.value.edad
    }


    this.estudianteService.agregarEstudiante(estudiante).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })

  }




}
