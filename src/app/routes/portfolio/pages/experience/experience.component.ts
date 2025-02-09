import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CustomCursorComponent } from "../../../../shared/components/custom-cursor/cursor-component";
import {DEF_ABOUT_TEXT} from "../../../../core/globalConst";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  text: string = DEF_ABOUT_TEXT;

  timelineData = [
    { year: 'April 2024 - June 2024', title: 'Frontend Developer', description: 'I received training in Angular and developed complex applications.', company: 'ViewNext' },
    { year: 'June 2024 - Present', title: 'Frontend Developer', description: 'Working on different projects, developing scalable applications using Angular.', company: 'ViewNext' },
  ];

  constructor(private customCursor: CustomCursorComponent) {}

  ngOnInit() {}

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.checkVisibility();
  }

  ngAfterViewInit(): void {
    this.checkVisibility(); // Check visibility after view initialization
  }

  private checkVisibility(): void {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item: Element) => {
      const element = item as HTMLElement; // Casting explícito a HTMLElement
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.top <= window.innerHeight * 0.8; // 80% de la altura del viewport

      if (isVisible) {
        element.classList.add('visible');
      }
    });
  }


  onMouseEnter() {
    this.customCursor.setIsHovered(true);
  }

  onMouseLeave() {
    this.customCursor.setIsHovered(false);
  }
}
