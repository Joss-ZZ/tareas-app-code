import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent {
  
  themeSelection: boolean = false;
  items: MenuItem[] = [];

  constructor(@Inject(DOCUMENT) private document: Document) {
    let theme = window.localStorage.getItem('theme');
    if(theme) {
      this.themeSelection = theme == 'dark' ? true : false;
      this.changeTheme(this.themeSelection);
    }
  }

  changeTheme(state: boolean) {
    let theme = state ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    let themeLink = this.document.getElementById('app-theme') as HTMLLinkElement;
    themeLink.href = 'lara-' + theme + '-blue' + '.css';
  }
}
