import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonsService {

  /* variable encarga de obtner la URL para la conexion al API */
  public urlBase = environment.urlBase;

  constructor(public http: HttpClient, public snackBar: MatSnackBar) { }

 /**
  * Servicio encargado de hacer la peticion http para obtener todas las ciudades
  * @returns lista de las ciudades
  */
  public getCiudades(): any {
    return this.http.get(this.urlBase + '/ciudad/listar-ciudad');
  }
}
