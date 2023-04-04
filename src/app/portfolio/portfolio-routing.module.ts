import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NOAHComponent } from './pages/noah/noah.component';
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
  {
    path: 'up-noah-revamped',
    component: NOAHComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
