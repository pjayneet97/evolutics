import {APP_INITIALIZER, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TopNavComponent} from './navigation/top-nav/top-nav.component';
import {BottomNavComponent} from './navigation/bottom-nav/bottom-nav.component';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {KeycloakAngularModule, KeycloakService} from "keycloak-angular";
import {initializeKeycloak} from "./Keycloak/keycloak.init";
import { ComponentsModule } from './Shared/components/components.module';
import { LifeModule } from './Life/life.module';
import { FormLayout1Component } from './Layout/form-layout1/form-layout1.component';
import { FormNavigationComponent } from './navigation/form-navigation/form-navigation.component';
import { DashboardComponent } from './Layout/dashboard/dashboard.component';
import { LifeHomeComponent } from './Life/life-home/life-home.component';
import { GeneralHomeComponent } from './General/general-home/general-home.component';
import { HealthHomeComponent } from './Health/health-home/health-home.component';
import { ActuarialHomeComponent } from './Actuarial/actuarial-home/actuarial-home.component';
import { CRMHomeComponent } from './CRM/crmhome/crmhome.component';
import { AnalyticsHomeComponent } from './Analytics/analytics-home/analytics-home.component';
import { AssetsHomeComponent } from './Assets/assets-home/assets-home.component';
import { FinanceHomeComponent } from './Finance/finance-home/finance-home.component';
import { CashHomeComponent } from './Cash/cash-home/cash-home.component';
import { DocumentHomeComponent } from './Document/document-home/document-home.component';
import { PageNotFoundComponent } from './Shared/page-not-found/page-not-found.component';
import {KeycloakManagerService} from "./Services/keycloak-manager.service";
import {HttpClientModule} from "@angular/common/http";
import { Screenshot1Component } from './form/screenshot1/screenshot1.component';
import { Screenshot2Component } from './form/screenshot2/screenshot2.component';
import { Screenshot3Component } from './form/screenshot3/screenshot3.component';
import { Screenshot4Component } from './form/screenshot4/screenshot4.component';
import { Screenshot5Component } from './form/screenshot5/screenshot5.component';
import { HeaderComponent } from './form/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonComponent } from './form/common/common.component';
import { AllformsComponent } from './form2/allforms/allforms.component';
import { PersonalinfoComponent } from './form2/personalinfo/personalinfo.component';
import { IdentificationComponent } from './form2/identification/identification.component';
import { EmployinfoComponent } from './form2/employinfo/employinfo.component';
import { PaymentinfoComponent } from './form2/paymentinfo/paymentinfo.component';
import { NextofkinComponent } from './form2/nextofkin/nextofkin.component';
import { FormheaderComponent } from './form2/formheader/formheader.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    TopNavComponent,
    BottomNavComponent,
    FormLayout1Component,
    FormNavigationComponent,
    DashboardComponent,
    LifeHomeComponent,
    GeneralHomeComponent,
    HealthHomeComponent,
    ActuarialHomeComponent,
    CRMHomeComponent,
    AnalyticsHomeComponent,
    AssetsHomeComponent,
    FinanceHomeComponent,
    CashHomeComponent,
    DocumentHomeComponent,
    PageNotFoundComponent,
    Screenshot1Component,
    Screenshot2Component,
    Screenshot3Component,
    Screenshot4Component,
    Screenshot5Component,
    HeaderComponent,
    CommonComponent,
    AllformsComponent,
    PersonalinfoComponent,
    IdentificationComponent,
    EmployinfoComponent,
    PaymentinfoComponent,
    NextofkinComponent,
    FormheaderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    KeycloakAngularModule,
    ComponentsModule,
    LifeModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [{
    provide: APP_INITIALIZER,
    useFactory: initializeKeycloak,
    multi: true,
    deps: [KeycloakService],
  },KeycloakManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
