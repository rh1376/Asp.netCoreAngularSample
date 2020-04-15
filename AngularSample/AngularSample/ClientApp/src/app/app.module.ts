
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserXhrWithProgress, ProgressService } from './services/progress.service';
import { PhotoService } from './services/photo.service';
import { ViewVehicleComponent } from './components/view-vehicle/view-vehicle';
import { AppErrorHandler } from './components/app/app.error-handler';

import { VehicleService } from './services/vehicle.service';
import { AuthService } from './services/auth.service';
import { AuthInterceptor } from './auth.interceptor';

import { BrowserModule } from '@angular/platform-browser';
import { 
  MatButtonModule, 
  MatInputModule, 
  MatCardModule, 
  MatListModule, 
  MatToolbarModule,
  MatExpansionModule,
  MatRadioModule,
  MatDialogModule,
  MatFormFieldModule
} from '@angular/material';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ToastyModule } from 'ng2-toasty';
import { Ng2TableModule } from 'ng2-table/ng2-table';
import { PaginationModule , TabsModule } from 'ng2-bootstrap';
import {MatTabsModule} from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {HttpModule, BrowserXhr} from '@angular/http';

import { AppComponent } from './components/app/app.component';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { HomeComponent } from './components/home/home.component';
import { PaginationComponent } from './components/shared/pagination.component';
import { VehicleFormComponent } from './components/vehicle-form/vehicle-form.component';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list.component';
import { RegisterComponent } from './components/Account/register.component'
import { LoginComponent } from './components/Account/login.component'



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    VehicleFormComponent,
    VehicleListComponent,
    PaginationComponent,
    ViewVehicleComponent,
    RegisterComponent,
    LoginComponent        
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),    
    HttpClientModule,
    ToastyModule.forRoot(),
    FormsModule,    
    ReactiveFormsModule,
    HttpModule,
    Ng2TableModule,
    PaginationModule.forRoot(),
    TabsModule,   
    MatButtonModule, 
    MatInputModule, 
    MatCardModule, 
    MatListModule, 
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule, 
    MatFormFieldModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path: '', redirectTo: 'Vehicles', pathMatch: 'full' },
      { path: 'Vehicle/new', component: VehicleFormComponent },
      { path: 'Vehicle/edit/:id', component: VehicleFormComponent },
      { path: 'Vehicle/:id', component: ViewVehicleComponent },
      { path: 'Vehicles', component: VehicleListComponent },
      { path: 'register', component: RegisterComponent},
      { path: 'login', component: LoginComponent},
      { path: 'home', component: HomeComponent },      
    ])
  ],
  exports: [
    MatButtonModule, 
    MatInputModule, 
    MatCardModule, 
    MatListModule, 
    MatToolbarModule,
    MatExpansionModule,
    MatRadioModule,
    MatDialogModule,
    MatTabsModule, 
    MatFormFieldModule
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler},
    { provide: BrowserXhr, useClass: BrowserXhrWithProgress},
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    VehicleService,
    AuthService,
    PhotoService,
    ProgressService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
