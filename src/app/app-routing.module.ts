import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { AfriqueComponent } from './afrique/afrique.component';
import { AmeriqueComponent } from './amerique/amerique.component';
import { AsieComponent } from './asie/asie.component';
import { EuropeComponent } from './europe/europe.component';
import { ListePaysComponent } from './liste-pays/liste-pays.component';
import { OceanieComponent } from './oceanie/oceanie.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: AccueilComponent
},
{
  path: 'europe',
  component: EuropeComponent
},
{
  path: 'afrique',
  component: AfriqueComponent
},
{
  path: 'amerique',
  component: AmeriqueComponent
},
{
  path: 'oceanie',
  component: OceanieComponent
},
{
  path: 'asie',
  component: AsieComponent
},
{
  path: 'pays',
  component: ListePaysComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
