import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ExperiencePathComponent } from "./experience-path/experience-path.component";
import { ExperienceDirective } from './experience-path/experience.directive';

@Component({
  selector: 'app-home',
  imports: [RouterLink, ExperiencePathComponent, ExperienceDirective],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  protected name = 'Conte Claudio Salvatore';
}
