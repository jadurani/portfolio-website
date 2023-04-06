import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'pw-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent {
  isHeaderAtTop = true;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const rootElement = document.querySelector('app-root');
    const rootRect = rootElement.getBoundingClientRect();
    this.isHeaderAtTop = rootRect.top === 0;
  }
}
