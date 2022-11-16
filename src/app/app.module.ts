import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';

import { NgModule } from '@angular/core';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { appReducer } from './app.state';
import { AuthenticationService } from './auth/data-access/authentication.service';
import { AuthInterceptor } from './auth/interceptor/auth.interceptor';
import { BusinessEffects } from './business/data-access/business.effects';
import { BusinessmanEffects } from './businessman/data-access/businessman.effects';
import { FooterComponent } from './core/components/footer/footer.component';
import { SidenavButtonComponent } from './core/components/navigation/sidenav-button/sidenav-button.component';
import { SidenavComponent } from './core/components/navigation/sidenav/sidenav.component';
import { ToolbarComponent } from './core/components/navigation/toolbar/toolbar.component';
import { SidenavDirective } from './core/directive/sidenav.directive';
import { ProductEffects } from './product/data-access/product.effects';
import { ShopsEffects } from './shop/data-access/shop.effects';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    FooterComponent,
    SidenavComponent,
    SidenavButtonComponent,
    SidenavDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // Angular Material
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    // Ngx-Translate
    TranslateModule.forRoot({
      defaultLanguage: 'en',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    // Firebase
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    AngularFireAuthModule,
    // NgRX
    StoreModule.forRoot(appReducer, {}),
    EffectsModule.forRoot([BusinessEffects, BusinessmanEffects, ProductEffects, ShopsEffects]),
  ],
  providers: [
    AuthenticationService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebase },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

// Ngx-translate
// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
