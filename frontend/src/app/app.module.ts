import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { GraphicsComponent } from './graphics/graphics.component';
import { RouterModule } from '@angular/router';
import { WebsitesComponent } from './websites/websites.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    GraphicsComponent,
    WebsitesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: 'oferta/grafika', component: GraphicsComponent },
      { path: 'oferta/strony', component: WebsitesComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
