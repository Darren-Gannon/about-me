import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CvPageComponent } from './pages/cv-page/cv-page.component';
import { IdentityComponent } from './components/identity/identity.component';
import { ScaleComponent } from './components/scale/scale.component';
import { IdentityLinkComponent } from './components/identity/identity-link/identity-link.component';
import { CardComponent } from './components/card/card.component';
import { DatedItemComponent } from './components/dated-item/dated-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CvPageComponent,
    IdentityComponent,
    ScaleComponent,
    IdentityLinkComponent,
    CardComponent,
    DatedItemComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
