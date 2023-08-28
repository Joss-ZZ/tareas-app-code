import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogRef } from 'primeng/dynamicdialog';

export interface RowModel {
  meta: string,
  persona: string,
  fecha: boolean,
  prioridad: boolean,
  proyecto: string,
  avance: number,
  children: RowModel[]
}

@Component({
  selector: 'app-add-row',
  templateUrl: './add-row.component.html'
})
export class AddRowComponent {

  value: number = 0;
  
  nuevaFila: Partial<RowModel> = {
    meta: '',
    persona: 'Jhosimar',
    fecha: true,
    prioridad: true,
    proyecto: 'Jhosimar',
    avance: 0,
  };
  

  form: FormGroup = this.formBuilder.group({
    tarea: ["", [Validators.required]],
    fecha: [false, [Validators.required]],
    prioridad: [false, [Validators.required]],
    avance: [0, [Validators.required]]
  })

  constructor(public ref: DynamicDialogRef, 
              private formBuilder: FormBuilder) { }

  agregarRow() {
    this.nuevaFila.meta = this.form.get('tarea')?.value;
    this.nuevaFila.fecha = this.form.get('fecha')?.value;
    this.nuevaFila.prioridad = this.form.get('prioridad')?.value;
    this.nuevaFila.avance = this.form.get('avance')?.value;
    this.ref.close(this.nuevaFila);
  }
}
