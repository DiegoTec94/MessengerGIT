import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ConversationComponent } from './conversation/conversation.component';

//#region @angular Material Desing

import { MatButtonModule } from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';

//#endregion
//#region 

import { Routes, RouterModule } from '@angular/router';

//#endregion

//#region const

const appRoutes : Routes = [
  { path: '', component : HomeComponent},
  { path: 'home', component : HomeComponent},
  { path: 'conversation/:userId', component : ConversationComponent},
];

//#endregion

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConversationComponent,
    
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MatButtonModule,
    MatToolbarModule
    ],
    exports: [MatButtonModule,MatToolbarModule],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }





