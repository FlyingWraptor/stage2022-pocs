import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { IonicModule } from '@ionic/angular';
import { CentralSourceService } from '../central-source.service';



@NgModule({
  declarations: [
    TestComponent,
    Test2Component
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    TestComponent,
    Test2Component
  ],
  providers: [
    CentralSourceService
  ]
})
export class SharedModule { }
