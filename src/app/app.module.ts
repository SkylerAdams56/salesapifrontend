import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';
import { EmployeeDetailComponent } from './employee/employee-detail/employee-detail.component';
import { EmployeeCreateComponent } from './employee/employee-create/employee-create.component';
import { EmployeeChangeComponent } from './employee/employee-change/employee-change.component';
import { EmployeeLoginComponent } from './employee/employee-login/employee-login.component';
import { MenubarComponent } from './menu/menubar/menubar.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { OrderDetailComponent } from './order/order-detail/order-detail.component';
import { OrderCreateComponent } from './order/order-create/order-create.component';
import { OrderChangeComponent } from './order/order-change/order-change.component'

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailComponent,
    EmployeeCreateComponent,
    EmployeeChangeComponent,
    EmployeeLoginComponent,
    MenubarComponent,
    OrderListComponent,
    OrderDetailComponent,
    OrderCreateComponent,
    OrderChangeComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
