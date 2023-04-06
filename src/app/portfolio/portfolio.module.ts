import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RapidpassComponent } from './pages/rapidpass/rapidpass.component';
import { ReliefagadComponent } from './pages/reliefagad/reliefagad.component';
import { NOAHComponent } from './pages/noah/noah.component';
import { PageHeaderComponent } from './components/page-header/page-header.component';
import { BayanipayComponent } from './pages/bayanipay/bayanipay.component';

const components = [PageHeaderComponent];
const pages = [
  RapidpassComponent,
  ReliefagadComponent,
  NOAHComponent,
  BayanipayComponent,
];

@NgModule({
  declarations: [...pages, ...components],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
