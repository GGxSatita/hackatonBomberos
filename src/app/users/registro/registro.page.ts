import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup, Validators} from '@angular/forms'
import { Router } from '@angular/router';
import { RegistroServiceService } from '../../services/registro-service.service';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  public formularioReg!: FormGroup;

  constructor(
    private builder : FormBuilder,
    private servicio: RegistroServiceService,
    private router: Router
  ) {
    this.formularioInicio()
  }

  public formularioInicio(){
    this.formularioReg = this.builder.group({
      nombres : new FormControl('', [Validators.required]),
      apellidos: new FormControl('',[Validators.required]),
      tib : new FormControl(0,[Validators.required]),
      numeroTelefono : new FormControl(0, [Validators.required]),
      email : new FormControl('',[Validators.required]),
      contrasena : new FormControl('',[Validators.required, Validators.min(8)]),
      rut : new FormControl('',[Validators.required]),
      vd : new FormControl ('', [Validators.required])

    })
  }

  ngOnInit() {
  }


  public validar(){
    this.servicio.agregarUsuario({
      nombre: this.formularioReg.value.nombre,
      apellidos: this.formularioReg.value.apellidos,
      tib: this.formularioReg.value.tib,
      numeroTelefono: this.formularioReg.value.numeroTelefono,
      email: this.formularioReg.value.email,
      contrasena: this.formularioReg.value.contrasena,
      rut: this.formularioReg.value.rut,
      vd: this.formularioReg.value.vd,
    })

  }

}
