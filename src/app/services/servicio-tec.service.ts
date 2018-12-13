import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tecnico } from '../models/tecnico';

@Injectable({
  providedIn: 'root'
})
export class ServicioTecService {

  selectTecnico: Tecnico;
  tecnico: Tecnico[];
  readonly URL_API = 'http://localhost:3000/api/tecnicos';

  constructor(private _http: HttpClient) {
    this.selectTecnico = new Tecnico;
  }

  getTecnicos() {
    return this._http.get(this.URL_API);
  }

  // tslint:disable-next-line:no-shadowed-variable
  postTecnico(Tecnico: Tecnico) {
    return this._http.post(this.URL_API, Tecnico);
  }

  putTecnico(tecnico: Tecnico) {
    return this._http.put(this.URL_API + `/${tecnico._id}`, tecnico);
  }

  deleteTecnico(_id: string) {
    return this._http.delete(this.URL_API + `/${_id}`);
  }
}
