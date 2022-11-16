import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getDatabase, provideDatabase } from '@angular/fire/database';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';

import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './core/interceptor/auth.interceptor';
import { AuthenticationService } from './auth/data-access/authentication.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { BusinessEffects } from './business/data-access/business.effects';
import { BusinessmanEffects } from './businessman/data-access/businessman.effects';
import { EffectsModule } from '@ngrx/effects';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { FooterComponent } from './core/components/footer/footer.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { ProductEffects } from './shop/data-access/product/product.effects';
import { ShopsEffects } from './shop/data-access/shop/shop.effects';
import { SidenavButtonComponent } from './core/components/sidenav-button/sidenav-button.component';
import { SidenavComponent } from './core/components/sidenav/sidenav.component';
import { SidenavDirective } from './core/directives/sidenav.directive';
import { StoreModule } from '@ngrx/store';
import { ToolbarComponent } from './core/components/toolbar/toolbar.component';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { appReducer } from './app.state';
import { environment } from '../environments/environment';

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
