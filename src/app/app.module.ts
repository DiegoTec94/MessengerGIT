import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';
import { FormsModule } from '@angular/forms';
//#region @angular Material Desing

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//#endregion
//#region 

import { Routes, RouterModule } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

//#endregion

//#region const

const appRoutes : Routes = [
  { path: '', component : LoginComponent},
  { path: 'Login', component : LoginComponent},
  { path: 'Register', component : RegisterComponent},
  { path: 'Home', component : HomeComponent},
  { path: 'Conversation/:userId', component : ConversationComponent}
];

//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversationComponent,
    LoginComponent,
    RegisterComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule ,// imports firebase/storage only needed for storage features
    AngularFireDatabaseModule,
    MatButtonModule,
    FormsModule,
    MatToolbarModule
    ],
    exports: [MatButtonModule,MatToolbarModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





