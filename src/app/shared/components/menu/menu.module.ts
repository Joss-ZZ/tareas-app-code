import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputSwitchModule } from 'primeng/inputswitch';
import { MenubarModule } from 'primeng/menubar';

import { MenuComponent } from './menu.component';

@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    InputSwitchModule,
    MenubarModule,
  ],
  exports: [
    MenuComponent
  ]

})
export class MenuModule { }
