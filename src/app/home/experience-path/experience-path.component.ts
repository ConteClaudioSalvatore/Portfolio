import { NgTemplateOutlet } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  contentChildren,
} from '@angular/core';
import { ExperienceDirective } from './experience.directive';

@Component({
  selector: 'app-experience-path',
  imports: [NgTemplateOutlet],
  template: `
    <ul class="path">
      @for(experience of experiences(); track $index) {
      <li class="path-step">
        <div class="content">
          <ng-container *ngTemplateOutlet="experience.templateRef" />
        </div>
      </li>
      }
    </ul>
    <ng-content></ng-content>
  `,
  styleUrl: './experience-path.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperiencePathComponent {
  experiences = contentChildren(ExperienceDirective);
}
