import { Component, OnInit } from '@angular/core';
import { ServicioTecService } from 'src/app/services/servicio-tec.service';
import { NgForm } from '@angular/forms';
import { Tecnico } from 'src/app/models/tecnico';

declare var M: any;

@Component({
  selector: 'app-tecnicos-page',
  templateUrl: './tecnicos-page.component.html',
  styleUrls: ['./tecnicos-page.component.css']
})
export class TecnicosPageComponent implements OnInit {

  constructor(public tecnicoService: ServicioTecService) { }

  ngOnInit() {
    this.getTecnicos(); // SE mostrara cuando iniciemos la aplicación
  }

  addTecnico(form: NgForm) {
    if (form.value._id) {
      this.tecnicoService.putTecnico(form.value)
        .subscribe(res => {
          // console.log(res);
          this.resertForm(form);
          M.toast({html: 'Tecnico Actualizado'});
          this.getTecnicos();
        });
    } else {
      // console.log(form.value);
      this.tecnicoService.postTecnico(form.value)
        .subscribe(res => {
          // console.log(res);
          this.resertForm(form);
          M.toast({html: 'Tecnico Guardado'});
          this.getTecnicos();
        });
    }
  }

  getTecnicos() {
    this.tecnicoService.getTecnicos()
      .subscribe(res => {
        this.tecnicoService.tecnico = res as Tecnico[];
        console.log(res);
      });
  }

  editTecnico(tecnico: Tecnico) {
    this.tecnicoService.selectTecnico = tecnico;
  }
  deleteTecnico(_id: string) {
    if (confirm('¿Esta seguro de querer eliminarlo?')) {
    this.tecnicoService.deleteTecnico(_id)
      .subscribe(res => {
        // console.log(res);
        M.toast({html: 'Tecnico Eliminado'});
        this.getTecnicos();
        });
      }
  }

  resertForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.tecnicoService.selectTecnico = new Tecnico();
    }
  }

}
