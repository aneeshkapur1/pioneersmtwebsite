import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MapsModule } from '@syncfusion/ej2-angular-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FrontscreenComponent } from './frontscreen/frontscreen.component';
import { BusinessprofileComponent } from './businessprofile/businessprofile.component';
import { KeyclientsComponent } from './keyclients/keyclients.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { LocationsComponent } from './locations/locations.component';
import { FormsModule } from '@angular/forms';
import { ContactusComponent } from './contactus/contactus.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FrontscreenComponent,
    BusinessprofileComponent,
    KeyclientsComponent,
    TestimonialsComponent,
    IntroductionComponent,
    LocationsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    FontAwesomeModule,
    MapsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
