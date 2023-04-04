import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { RapidpassComponent } from './pages/rapidpass/rapidpass.component';
import { ReliefagadComponent } from './pages/reliefagad/reliefagad.component';
import { NOAHComponent } from './pages/noah/noah.component';

const pages = [RapidpassComponent, ReliefagadComponent, NOAHComponent];

@NgModule({
  declarations: [...pages],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
