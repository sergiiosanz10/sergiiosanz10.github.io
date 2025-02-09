import { Component } from '@angular/core';
import { CustomCursorComponent } from '../../../../shared/components/custom-cursor/cursor-component';
import {DEF_ABOUT_TEXT} from "../../../../core/globalConst";


@Component({
  selector: 'app-aboutme-page',
  templateUrl: './aboutme-page.component.html',
  styleUrl: './aboutme-page.component.scss'
})
export class AboutmePageComponent {
  text: string = DEF_ABOUT_TEXT;

  constructor(private customCursor: CustomCursorComponent) { }

  onMouseEnter() {
    this.customCursor.setIsHovered(true);
  }

  onMouseLeave() {
    this.customCursor.setIsHovered(false);
  }
}
