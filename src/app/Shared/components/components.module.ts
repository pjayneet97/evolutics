import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './core/button/button.component';

@NgModule({
  declarations: [
    ButtonComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    
  ],
  exports: [
    ButtonComponent
  ]
})
export class ComponentsModule {  }
