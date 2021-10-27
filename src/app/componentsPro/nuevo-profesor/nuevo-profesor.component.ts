
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProfesoresService } from 'src/app/servicesPro/profesores.service';
@Component({
  selector: 'app-nuevo-profesor',
  templateUrl: './nuevo-profesor.component.html',
  styleUrls: ['./nuevo-profesor.component.css']
})
export class NuevoProfesorComponent implements OnInit {

  createProfesor: FormGroup;
  enviado = false;


  constructor(private fb: FormBuilder, private profesorService: ProfesoresService) {
    this.createProfesor = this.fb.group({
      nombre: ['', Validators.required],
      edad: ['', Validators.required]
    }
    );
  }

  ngOnInit(): void {
  }

  agregarProfesor() {
    this.enviado = true;

    if (this.createProfesor.invalid) {
      return;
    }
    const profesor: any = {
      nombre: this.createProfesor.value.nombre,
      edad: this.createProfesor.value.edad
    }


    this.profesorService.agregarProfesor(profesor).then(() => {
      console.log("registro exitoso");
    }).catch(error => {
      console.log(error);
    })

  }

}
