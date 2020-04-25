import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {IntroductionComponent} from './introduction/introduction.component'
import { AssemblyprocessComponent } from './assemblyprocess/assemblyprocess.component';
import { FrontscreenComponent } from './frontscreen/frontscreen.component';
import { DistributionPrincipalComponent } from './distribution-principal/distribution-principal.component';
import { LocationsComponent } from './locations/locations.component';
import { OrganisationComponent } from './organisation/organisation.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { StrengthsComponent } from './strengths/strengths.component';
import { ProcessComponent } from './process/process.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ClientsComponent } from './clients/clients.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = 
[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'introduction', component:IntroductionComponent},
  {path:'assembly',component:AssemblyprocessComponent},
  {path:'distribution',component:DistributionPrincipalComponent},
  {path:'profile',component:ProfileComponent},
  {path:'home',component:FrontscreenComponent},
  {path:'clients',component: ClientsComponent},
  {path:'locations',component:LocationsComponent},
  {path:'organisation',component:OrganisationComponent},
  {path:'testimonials',component:TestimonialsComponent},
  {path:'strengths',component:StrengthsComponent},
  {path:'contact-us',component:ContactusComponent},
  {path:'process',component:ProcessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
