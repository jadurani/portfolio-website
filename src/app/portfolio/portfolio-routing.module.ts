import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapidpassComponent } from './pages/rapidpass/rapidpass.component';
import { ReliefagadComponent } from './pages/reliefagad/reliefagad.component';

const routes: Routes = [
  {
    path: 'rapidpass',
    component: RapidpassComponent,
  },
  {
    path: 'reliefagad',
    component: ReliefagadComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
