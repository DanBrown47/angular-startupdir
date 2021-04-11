import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AuthService } from './auth.service';
import {TokenInterceptorService} from './token-interceptor.service';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DirectoryComponent } from './directory/directory.component';
import { DonationComponent } from './donation/donation.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { RequestfirmComponent } from './requestfirm/requestfirm.component';

import { CompaniespanelComponent } from './companiespanel/companiespanel.component';
import { ManagerfirmService } from './managerfirm.service';
import { PanelupdateComponent } from './panelupdate/panelupdate.component';
import { NotfoundComponent } from './notfound/notfound.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DirectoryComponent,
    DonationComponent,
    LoginComponent,
    AdminpanelComponent,
    RequestfirmComponent,

    CompaniespanelComponent,
    PanelupdateComponent,
    NotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthService, ManagerfirmService, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }

