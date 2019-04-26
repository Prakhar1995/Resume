import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import * as firebase from 'firebase';

import{AngularFireModule, FirebaseOptionsToken} from '@angular/fire';
import{AngularFireDatabaseModule} from '@angular/fire/database';
import { AngularFirestore } from '@angular/fire/firestore';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { ContactComponent } from './contact/contact.component';
import { CreateComponent } from './create/create.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSelectModule} from '@angular/material/select';
import { initializeApp } from 'firebase';
import { environment } from 'src/environments/environment';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    CreateComponent,
    
    
    
    
    
    
  ],
 
  imports: [


  
  BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatTabsModule,
    MatStepperModule,
  MatFormFieldModule  ,
  MatSelectModule,
  AngularFireModule.initializeApp(environment.firebase),
  AngularFireDatabaseModule,
  MatInputModule,
  MatFormFieldModule,
 
   ReactiveFormsModule,
   FormsModule 
    
  
    
    
  ],
  exports:[],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
