import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RapidpassComponent } from './pages/rapidpass/rapidpass.component';

const pages = [RapidpassComponent];

@NgModule({
  declarations: [RapidpassComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
