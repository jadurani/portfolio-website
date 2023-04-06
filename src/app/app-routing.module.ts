import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./portfolio/portfolio.module').then((m) => m.PortfolioModule),
  },
  {
    path: '',
    component: LandingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { anchorScrolling: 'enabled' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
