import { NgModule } from '@angular/core';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { DonationComponent } from './donation/donation.component';
import { LoginComponent } from './login/login.component';
import { RequestfirmComponent } from './requestfirm/requestfirm.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { UserspanelComponent } from './userspanel/userspanel.component';
import { CompaniespanelComponent } from './companiespanel/companiespanel.component';
import { AuthGuard } from './auth.guard';
import { PanelupdateComponent } from './panelupdate/panelupdate.component';

const routes: Routes = [
  {path:'', component:DirectoryComponent},
  {path:'donate', component:DonationComponent},
  {path:'login', component:LoginComponent},
  {path:'addfirm',component:RequestfirmComponent},
  {path:'adminpanel',canActivate:[AuthGuard],component:AdminpanelComponent,
      children:[
        {path:'userspanel', canActivate:[AuthGuard], component:UserspanelComponent},
        {path:'companiespanel',component:CompaniespanelComponent},
        {path:'panelupdate',component:PanelupdateComponent}
      ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),GooglePayButtonModule],
  exports: [RouterModule,GooglePayButtonModule]
})
export class AppRoutingModule { }
