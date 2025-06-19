import { Directive, Optional, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appExperience]',
})
export class ExperienceDirective {
  constructor(@Optional() public templateRef: TemplateRef<any>) {}
}
