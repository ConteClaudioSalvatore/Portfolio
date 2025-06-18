import {
  afterNextRender,
  Component,
  ElementRef,
  viewChild,
  viewChildren,
} from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {
  private readonly nav = viewChild<ElementRef<HTMLElement>>('nav');
  private readonly section = viewChildren<ElementRef<HTMLElement>>('section');

  protected name = 'Conte Claudio Salvatore';

  constructor() {
    afterNextRender(() => {
      setInterval(() => {
        const isElementVisible = (ele: HTMLElement) => {
          const rect = ele.getBoundingClientRect();
          return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <=
              (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <=
              (window.innerWidth || document.documentElement.clientWidth)
          );
        };
        const nav = this.nav()?.nativeElement;
        if (!nav) return;
        const shouldAdd = this.section().some((x) =>
          isElementVisible(x.nativeElement)
        );
        if (shouldAdd) {
          if (nav.classList.contains('visible')) {
            nav.classList.add('visible');
          }
          return;
        }
        if (nav.classList.contains('visible')) nav.classList.remove('visible');
      }, 1000);
    });
  }
}
