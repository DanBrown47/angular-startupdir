import { NgModule } from '@angular/core';
import { GooglePayButtonModule } from '@google-pay/button-angular';
import { RouterModule, Routes } from '@angular/router';
import { DirectoryComponent } from './directory/directory.component';
import { DonationComponent } from './donation/donation.component';
import { LoginComponent } from './login/login.component';
import { RequestfirmComponent } from './requestfirm/requestfirm.component';

const routes: Routes = [
  {path:'', component:DirectoryComponent},
  {path:'donate', component:DonationComponent},
  {path:'login', component:LoginComponent},
  {path:'addfirm',component:RequestfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),GooglePayButtonModule],
  exports: [RouterModule,GooglePayButtonModule]
})
export class AppRoutingModule { }
