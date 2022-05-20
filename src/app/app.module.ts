import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './core/guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProvider } from './core/interceptors/auth.interceptor';
import { httpErrorInterceptorProvider } from './core/interceptors/error.interceptor';
import { TokenStorageService } from './core/services/token-storage.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    TokenStorageService,
    authInterceptorProvider,
    httpErrorInterceptorProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
