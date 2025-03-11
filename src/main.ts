import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Route } from '@angular/router';
import { provideHttpClient } from '@angular/common/http'; // Necesario para AuthService
import { AppComponent } from './app/app.component';
import { LoginComponent } from './app/pages/login/login.component';
import { RegisterComponent } from './app/pages/register/register.component';
import { ProductsComponent } from './app/pages/products/products.component';
import { AuthService } from './app/services/auth.service'; // Importar AuthService

const routes: Route[] = [
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'products', component: ProductsComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideHttpClient(), AuthService],
}).catch((err) => console.error(err));
