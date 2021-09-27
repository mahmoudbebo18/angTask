import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UpperNavComponent } from './views/upper-nav/upper-nav.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HeaderComponent } from './views/header/header.component';
import { CountdownModule } from 'ngx-countdown';
import { CountDownComponent } from './views/count-down/count-down.component';
import { FeaturedComponent } from './views/featured/featured.component';
import { FeedbackComponent } from './views/feedback/feedback.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { ContactComponent } from './views/contact/contact.component';
import { FooterComponent } from './views/footer/footer.component';
import { SearchComponent } from './views/popups/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    UpperNavComponent,
    NavbarComponent,
    HeaderComponent,
    CountDownComponent,
    FeaturedComponent,
    FeedbackComponent,
    StatisticsComponent,
    ContactComponent,
    FooterComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CountdownModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
