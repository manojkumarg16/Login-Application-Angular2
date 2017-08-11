import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routes } from './app.router';
import { LoginComponent } from './login/login.component';
import { NavoneComponent } from './navone/navone.component';
import { AuthService } from './services/auth.service';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { RegisterComponent } from './register/register.component';

import { AuthGuard } from './guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavoneComponent,
    UserEntryComponent,
    RegisterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
