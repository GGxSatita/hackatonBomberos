import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class RegistroServiceService {

  private url : string = 'https://console.firebase.google.com/u/1/project/bomberos-abc8c/firestore/data/~2F?hl=es'
  public registro : Usuario | null = null

  constructor( private http: HttpClient,
    private ruta : Router,
    private mensaje: AlertController
    ) { }

    public agregarUsuario(nuevoUsuario : Usuario){
      return this.http.post<Usuario>(this.url, {...nuevoUsuario},{
        headers :{
          'Content-Type': 'application/json; charset=utf-8'
        }
      }).subscribe(datos =>{
        if(datos){
          this.registro = datos;
          this.ruta.navigate(['/'])
        }
      })
    }
}
