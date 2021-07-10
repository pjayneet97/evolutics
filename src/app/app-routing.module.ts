import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LifeHomeComponent} from "./Life/life-home/life-home.component";
import {PageNotFoundComponent} from "./Shared/page-not-found/page-not-found.component";
import {GeneralHomeComponent} from "./General/general-home/general-home.component";
import {HealthHomeComponent} from "./Health/health-home/health-home.component";
import {ActuarialHomeComponent} from "./Actuarial/actuarial-home/actuarial-home.component";
import {CRMHomeComponent} from "./CRM/crmhome/crmhome.component";
import {AnalyticsHomeComponent} from "./Analytics/analytics-home/analytics-home.component";
import {AssetsHomeComponent} from "./Assets/assets-home/assets-home.component";
import {FinanceHomeComponent} from "./Finance/finance-home/finance-home.component";
import {CashHomeComponent} from "./Cash/cash-home/cash-home.component";
import {DocumentHomeComponent} from "./Document/document-home/document-home.component";
import {FormLayout1Component} from "./Layout/form-layout1/form-layout1.component";
import {LifeSetupProductCoverCodeComponent} from "./Life/Setup/Product/life-setup-product-cover-code/life-setup-product-cover-code.component";
import {AuthGuardService} from "./Keycloak/auth-guard.service";
import {LifeadminuserComponent} from './Life/user/adminuser/lifeadminuser.component';
import {CreateCoverCodeComponent} from "./Life/Setup/Product/life-setup-product-cover-code/create-cover-code/create-cover-code.component";
import {IndexCoverCodeComponent} from "./Life/Setup/Product/life-setup-product-cover-code/index-cover-code/index-cover-code.component";
import {ShowCoverCodeComponent} from "./Life/Setup/Product/life-setup-product-cover-code/show-cover-code/show-cover-code.component";
import {LifeadminusergroupComponent} from './Life/user/adminusergroup/lifeadminusergroup.component';
import {LifeadminusermenuComponent} from './Life/user/adminusermenu/lifeadminusermenu.component';
import {AdmindatesComponent} from './Life/admin/admindates/admindates.component';
import {BatchlogComponent} from './Life/admin/batchlog/batchlog.component';
import {ConfigurationComponent} from './Life/admin/configuration/configuration.component';
import {DatabasedefinitionComponent} from './Life/admin/databasedefinition/databasedefinition.component';
import {InterestcalculationComponent} from './Life/admin/interestcalculation/interestcalculation.component';
import {RunbatchComponent} from './Life/admin/runbatch/runbatch.component';
import {CreatebatchComponent} from './Life/admin/createbatch/createbatch.component';
import {LifeReportIndexComponent} from "./Life/Report/life-report-index/life-report-index.component";
import {LifeReportCreateComponent} from "./Life/Report/life-report-create/life-report-create.component";
import {LifeReportShowComponent} from "./Life/Report/life-report-show/life-report-show.component";
import { Screenshot1Component } from './form/screenshot1/screenshot1.component';
import { Screenshot2Component } from './form/screenshot2/screenshot2.component';
import { Screenshot3Component } from './form/screenshot3/screenshot3.component';
import { Screenshot4Component } from './form/screenshot4/screenshot4.component';
import { Screenshot5Component } from './form/screenshot5/screenshot5.component';
import { CommonComponent } from './form/common/common.component';

const routes: Routes = [
  {path: 'screenshot1', component: Screenshot1Component},
  {path: 'screenshot2', component: Screenshot2Component},
  {path: 'screenshot3', component: Screenshot3Component},
  {path: 'screenshot4', component: Screenshot4Component},
  {path: 'screenshot5', component: Screenshot5Component},
  {path: 'common', component: CommonComponent},
  {path: '', redirectTo: '/life', pathMatch: 'full', data: {color: 'bg-primary'}},
  {
    path: 'life', data: {color: 'bg-primary'}, canActivate: [AuthGuardService], children: [
      {path: '', component: LifeHomeComponent},
      {
        path: 'report', component: FormLayout1Component, children: [
          {path: '', redirectTo: 'index', pathMatch: 'full'},
          {path: 'index', component: LifeReportIndexComponent, data: {title: 'Reports / Index'}},
          {
            path: 'create', component: LifeReportCreateComponent,
            data: {title: 'Reports / Create'}
          },
          {
            path: 'show', component: LifeReportShowComponent,
            data: {title: 'Reports / Show'}
          },
        ]
      },
      {
        path: 'setup', component: FormLayout1Component, children: [
          {
            path: 'product-cover-code',
            component: LifeSetupProductCoverCodeComponent,
            data: {title: 'Setup / Covers'},
            children: [
              {path: '', redirectTo: 'index', pathMatch: 'full'},
              {path: 'index', component: IndexCoverCodeComponent, data: {title: 'Setup / Covers'}},
              {
                path: 'create', component: CreateCoverCodeComponent,
                data: {title: 'Setup / Covers / Create'}
              },
              {
                path: 'show', component: ShowCoverCodeComponent,
                data: {title: 'Setup / Covers / Show'}
              },
            ]
          }
        ]
      },
      {
        path: 'admin', component: FormLayout1Component, children: [
          {path: 'user', component: LifeadminuserComponent, data: {title: 'Admin / User'}}
          , {path: 'user/:operation', component: LifeadminuserComponent, data: {title: 'Admin / User'}}
          , {path: 'usergroup', component: LifeadminusergroupComponent, data: {title: 'Admin / User Group'}}
          , {path: 'usergroup/:operation', component: LifeadminusergroupComponent, data: {title: 'Admin / User Group'}}
          , {path: 'usermenu', component: LifeadminusermenuComponent, data: {title: 'Admin / User Menu'}}
          , {path: 'usermenu/:operation', component: LifeadminusermenuComponent, data: {title: 'Admin / User Menu'}}
          , {path: '', component: LifeadminusermenuComponent, data: {title: 'Admin / User Menu'}}
          , {path: 'admindates', component: AdmindatesComponent, data: {title: 'Admin / Dates'}}
          , {path: 'admindates/:operation', component: AdmindatesComponent, data: {title: 'Admin / Dates'}}
          , {path: 'batchlog', component: BatchlogComponent, data: {title: 'Admin / Batch Log'}}
          , {path: 'batchlog/:operation', component: BatchlogComponent, data: {title: 'Admin / Batch Log'}}
          , {path: 'configuration', component: ConfigurationComponent, data: {title: 'Admin / Configuration'}}
          , {
            path: 'configuration/:operation',
            component: ConfigurationComponent,
            data: {title: 'Admin / Configuration'}
          }
          , {
            path: 'databasedefinition',
            component: DatabasedefinitionComponent,
            data: {title: 'Admin / Database Definition'}
          }
          , {
            path: 'databasedefinition/:operation',
            component: DatabasedefinitionComponent,
            data: {title: 'Admin / Database Definition'}
          }
          , {
            path: 'interestcalculation',
            component: InterestcalculationComponent,
            data: {title: 'Admin / Interest Calculation'}
          }
          , {
            path: 'interestcalculation/:operation',
            component: InterestcalculationComponent,
            data: {title: 'Admin / Interest Calculation'}
          }
          , {path: 'runbatch', component: RunbatchComponent, data: {title: 'Admin / Run Batch'}}
          , {path: 'runbatch/:operation', component: RunbatchComponent, data: {title: 'Admin / Run Batch'}}
          , {path: 'createbatch', component: CreatebatchComponent, data: {title: 'Admin / Create Batch'}}
          , {path: 'createbatch/:operation', component: CreatebatchComponent, data: {title: 'Admin / Create Batch'}}
        ]
      }
    ]
  },
  {path: 'life', redirectTo: '/life/home', pathMatch: 'full', data: {color: 'bg-primary'}},
  {path: 'general/home', component: GeneralHomeComponent, data: {color: 'bg-general'}},
  {path: 'general', redirectTo: '/general/home', pathMatch: 'full', data: {color: 'bg-general'}},
  {path: 'health/home', component: HealthHomeComponent, data: {color: 'bg-health'}},
  {path: 'health', redirectTo: '/health/home', pathMatch: 'full', data: {color: 'bg-health'}},
  {path: 'actuarial/home', component: ActuarialHomeComponent, data: {color: 'bg-actuarial'}},
  {path: 'actuarial', redirectTo: '/actuarial/home', pathMatch: 'full', data: {color: 'bg-actuarial'}},
  {path: 'crm/home', component: CRMHomeComponent, data: {color: 'bg-crm'}},
  {path: 'crm', redirectTo: '/crm/home', pathMatch: 'full', data: {color: 'bg-crm'}},
  {path: 'analytics/home', component: AnalyticsHomeComponent, data: {color: 'bg-analytics'}},
  {path: 'analytics', redirectTo: '/analytics/home', pathMatch: 'full', data: {color: 'bg-analytics'}},
  {path: 'assets/home', component: AssetsHomeComponent, data: {color: 'bg-assets'}},
  {path: 'assets', redirectTo: '/assets/home', pathMatch: 'full', data: {color: 'bg-asset'}},
  {path: 'finance/home', component: FinanceHomeComponent, data: {color: 'bg-finance'}},
  {path: 'finance', redirectTo: '/finance/home', pathMatch: 'full', data: {color: 'bg-finance'}},
  {path: 'cash/home', component: CashHomeComponent, data: {color: 'bg-cash'}},
  {path: 'cash', redirectTo: '/cash/home', pathMatch: 'full', data: {color: 'bg-cash'}},
  {path: 'document/home', component: DocumentHomeComponent, data: {color: 'bg-document'}},
  {path: 'document', redirectTo: '/document/home', pathMatch: 'full', data: {color: 'bg-document'}},
  {path: 'form', component: FormLayout1Component, data: {color: 'bg-primary', isToolbarVisible: false}},
  {path: '**', component: PageNotFoundComponent, data: {color: 'bg-primary'}}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
