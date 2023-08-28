import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MenubarModule } from 'primeng/menubar';
import { AccordionModule } from 'primeng/accordion';
import { TreeTableModule } from 'primeng/treetable';
import { InputSwitchModule } from 'primeng/inputswitch';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { SliderModule } from 'primeng/slider';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { ProgressBarModule } from 'primeng/progressbar';
import { AvatarModule } from 'primeng/avatar';
import { DropdownModule } from 'primeng/dropdown';


import { PrincipalComponent } from './principal.component';
import { AddRowComponent } from './add-row/add-row.component';
import { MenuModule } from 'src/app/shared/components/menu/menu.module';

const routes: Routes = [
  {
		path: '',
		component: PrincipalComponent
	}
];

@NgModule({
  declarations: [
    PrincipalComponent,
    AddRowComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    FormsModule,

    AccordionModule,
    MenubarModule,
    TreeTableModule,
    InputSwitchModule,
    InputTextModule,
    ButtonModule,
    CheckboxModule,
    SliderModule,
    DynamicDialogModule,
    ProgressBarModule,
    AvatarModule,
    DropdownModule,

    MenuModule,
  ]
})
export class PrincipalModule { }
