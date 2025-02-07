import {Component, ElementRef, ViewChild} from '@angular/core';
import { CustomCursorComponent } from '../custom-cursor/cursor-component';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})

export class NavbarComponent {

  @ViewChild('navbarNavAltMarkup') navbarNav!: ElementRef;


  constructor(private customCursor: CustomCursorComponent) {}



  closeNav() {
    if (this.navbarNav) {
      const navbarCollapse = this.navbarNav.nativeElement;
      if (navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show'); // Cierra el menú
      }
    }
  }

  onMouseEnter() {
    this.customCursor.setIsHovered(true);
  }

  onMouseLeave() {
    this.customCursor.setIsHovered(false);
  }


}
