import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ChaussureComponent } from './components/chaussure/chaussure.component';
import { HeaderComponent } from './components/header/header.component';
import { ChaussureDetailComponent } from './components/chaussure-detail/chaussure-detail.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AddChaussureComponent } from './components/add-chaussure/add-chaussure.component';
import {FormsModule} from '@angular/forms';
import { EditChaussureComponent } from './components/edit-chaussure/edit-chaussure.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChaussureComponent,
    HeaderComponent,
    ChaussureDetailComponent,
    AddChaussureComponent,
    EditChaussureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
