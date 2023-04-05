import {
  Component,
  AfterViewInit,
  OnDestroy,
  HostListener,
} from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'pw-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss'],
})
export class PageHeaderComponent implements AfterViewInit, OnDestroy {
  transparent = true;
  headerHeight: number;

  private _scrollSub: Subscription;

  constructor() {}

  ngAfterViewInit() {
    // this._scrollSub = this.ionContent.ionScroll.subscribe(
    //   (event: CustomEvent) => {
    //     const { currentY } = event.detail;
    //     if (currentY > 20) {
    //       this.transparent = false;
    //       return;
    //     }
    //     this.transparent = true;
    //   }
    // );
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    // Determine if the header is at the top of the page
    const headerElement = document.getElementById('header');
    const headerRect = headerElement.getBoundingClientRect();
    const isHeaderAtTop = headerRect.top === 0;

    console.log(isHeaderAtTop);
  }

  ngOnDestroy() {
    this._scrollSub && this._scrollSub.unsubscribe();
  }
}
