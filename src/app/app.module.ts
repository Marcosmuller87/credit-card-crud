import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreateCardComponent } from './components/create-card/create-card.component';
import { CardListComponent } from './components/card-list/card-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateCardComponent,
    CardListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
