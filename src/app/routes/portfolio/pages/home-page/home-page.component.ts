import { Component } from '@angular/core';
import { CustomCursorComponent } from '../../../../shared/components/custom-cursor/cursor-component';
import {DEF_ABOUT_SHORT_TEXT} from "../../../../core/globalConst";



@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

  text: string = DEF_ABOUT_SHORT_TEXT;


  constructor(private customCursor: CustomCursorComponent) { }

  onMouseEnter() {
    this.customCursor.setIsHovered(true);
  }

  onMouseLeave() {
    this.customCursor.setIsHovered(false);
  }
}
