import { Component } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AddRowComponent, RowModel } from './add-row/add-row.component';

interface Cliente {
  name: string;
  code: number;
}

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  providers: [ DialogService ]
})
export class PrincipalComponent {
  cols = [
    { field: 'meta', header: '' },
    { field: 'persona', header: 'PERSONA ASIGNADA' },
    { field: 'fecha', header: 'FECHA LIMITE' },
    { field: 'prioridad', header: 'PRIORIDAD' },
    { field: 'proyecto', header: 'PROYECTOS' },
    { field: 'avance', header: 'AVANCE' }
  ];

  accordionItems: any[] = [];

  clientes: Cliente[] | undefined;
  selectedCliente: Cliente | undefined;

  constructor(private dialogService: DialogService) { }

  ngOnInit() {
    this.clientes = [
      { name: 'Jhosimar', code: 1 },
      { name: 'Pedro', code: 2 },
      { name: 'QuimicaSuiza', code: 3 }
    ];
  }

  agregarItem() {
    const newItem = {
      header: `Objetivo ${this.accordionItems.length + 1}`,
      data: [],
      arguments: this.selectedCliente
    };
    this.accordionItems.push(newItem);
  }

  agregarFila(event: Event | undefined, item: any) {
    console.log(item);
    if (event)
      event.stopPropagation(); // Detener la propagación del evento

    const ref = this.dialogService.open(AddRowComponent, {
      header: 'Agregar Meta',
      width: '300px',
    });

    ref.onClose.subscribe((nuevaFila: undefined | Partial<RowModel>) => {
      if (nuevaFila) {
        nuevaFila.persona = item.arguments.name;
        nuevaFila.proyecto = item.arguments.name;
        nuevaFila.children! = [];
        const newData = [...item.data, nuevaFila];
        item.data = newData;
      }
    });
  }

  agregarFilaHija(parentNode: any) {
    console.log(parentNode);
    if (!parentNode.children) {
      parentNode.children = [];
    }

    const ref = this.dialogService.open(AddRowComponent, {
      header: 'Agregar Estrategia',
      width: '300px',
    });

    ref.onClose.subscribe((nuevaFila: undefined | Partial<RowModel>) => {
      if (nuevaFila) {
        nuevaFila.persona = parentNode.persona
        nuevaFila.proyecto = parentNode.proyecto
        parentNode.children.push(nuevaFila);
      }
    });
  }
}
