import { RequestUrlInterceptor } from '../request-url-interceptor';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from '../test/test.component';
import { Test2Component } from '../test2/test2.component';
import { IonicModule } from '@ionic/angular';
import { CentralSourceService } from '../central-source.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [
    TestComponent,
    Test2Component
  ],
  imports: [
    CommonModule,
    IonicModule,
    HttpClientModule
  ],
  exports: [
    TestComponent,
    Test2Component
  ],
  providers: [
    [{ provide: HTTP_INTERCEPTORS, useClass: RequestUrlInterceptor, multi: true }],
    CentralSourceService,
    RequestUrlInterceptor
  ]
})
export class SharedModule { }
