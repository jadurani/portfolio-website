import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RapidpassComponent } from './pages/rapidpass/rapidpass.component';

const routes: Routes = [
  {
    path: 'rapidpass',
    component: RapidpassComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PortfolioRoutingModule {}
