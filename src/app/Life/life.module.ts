import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LifeSetupProductCoverCodeComponent} from './Setup/Product/life-setup-product-cover-code/life-setup-product-cover-code.component';
import {LifeadminuserComponent} from './user/adminuser/lifeadminuser.component';
import {LifeadminusergroupComponent} from './user/adminusergroup/lifeadminusergroup.component';
import {LifeadminusermenuComponent} from './user/adminusermenu/lifeadminusermenu.component';
import {ComponentsModule} from '../Shared/components/components.module';
import {CreateCoverCodeComponent} from './Setup/Product/life-setup-product-cover-code/create-cover-code/create-cover-code.component';
import {RouterModule} from "@angular/router";
import {IndexCoverCodeComponent} from './Setup/Product/life-setup-product-cover-code/index-cover-code/index-cover-code.component';
import {ShowCoverCodeComponent} from './Setup/Product/life-setup-product-cover-code/show-cover-code/show-cover-code.component';
import { AdmindatesComponent } from './admin/admindates/admindates.component';
import { CreatebatchComponent } from './admin/createbatch/createbatch.component';
import { RunbatchComponent } from './admin/runbatch/runbatch.component';
import { BatchlogComponent } from './admin/batchlog/batchlog.component';
import { InterestcalculationComponent } from './admin/interestcalculation/interestcalculation.component';
import { DatabasedefinitionComponent } from './admin/databasedefinition/databasedefinition.component';
import { ConfigurationComponent } from './admin/configuration/configuration.component';
import { LifeReportIndexComponent } from './Report/life-report-index/life-report-index.component';
import { LifeReportShowComponent } from './Report/life-report-show/life-report-show.component';
import { LifeReportCreateComponent } from './Report/life-report-create/life-report-create.component';


@NgModule({
  declarations: [
    LifeSetupProductCoverCodeComponent,
    LifeadminuserComponent,
    LifeadminusergroupComponent,
    LifeadminusermenuComponent,
    CreateCoverCodeComponent,
    IndexCoverCodeComponent,
    ShowCoverCodeComponent,
    AdmindatesComponent,
    CreatebatchComponent,
    RunbatchComponent,
    BatchlogComponent,
    InterestcalculationComponent,
    DatabasedefinitionComponent,
    ConfigurationComponent,
    LifeReportIndexComponent,
    LifeReportShowComponent,
    LifeReportCreateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule
  ]
})
export class LifeModule {
}
