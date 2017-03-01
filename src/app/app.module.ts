import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HeaderComponent }  from './components/header.component';
import { HeaderDivComponent }  from './components/headerDiv.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent,  HeaderComponent, HeaderDivComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
