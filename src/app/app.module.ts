import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { LouageListComponent } from './louage-list/louage-list.component';
import { ReservationListComponent } from './reservation-list/reservation-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [AppComponent, LouageListComponent, ReservationListComponent, UserListComponent, RegisterComponent, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule, HttpClientModule, FormsModule],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}

