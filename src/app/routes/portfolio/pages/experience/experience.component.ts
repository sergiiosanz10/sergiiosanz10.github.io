import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { CustomCursorComponent } from "../../../../shared/components/custom-cursor/cursor-component";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit, AfterViewInit {
  text: string = `Hello! My name is Sergio Sanz, and I am a passionate Front-end developer. I specialize in creating interactive, efficient, and sophisticated web applications using the latest technologies and frameworks.

  Over the years, I have honed my skills in HTML, CSS, JavaScript, and TypeScript. I have a solid experience with frameworks such as Angular, and I'm also familiar with Bootstrap for user interface design. In addition, I have experience with CSS preprocessors like Sass.

  On the server side, I have experience with Node.js and PHP, and I'm comfortable using jQuery for DOM manipulations and effects. I'm also familiar with package handling with npm.

  I have worked on a variety of projects, from simple static websites to complex web applications. I enjoy the challenge of solving problems and creating solutions that not only meet the requirements but also provide a great user experience.

  In addition to my technical skills, I am a strong communicator and a team player. I believe that collaboration and clear communication are key to the success of any project.

  I'm always looking for new opportunities to apply my skills and contribute to exciting projects. If you're interested in working with me, please don't hesitate to get in touch!`;

  timelineData = [
    { year: 'April 2024 - June 2024', title: 'Frontend Developer', description: 'I received training in Angular and developed complex applications.', company: 'ViewNext' },
    { year: 'June 2024 - Present', title: 'Frontend Developer', description: 'Developing scalable applications using Angular.', company: 'ViewNext' },
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
