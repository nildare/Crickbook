import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AustraliaComponent } from './australia/australia.component';
import { AteamComponent } from './australia/ateam/ateam.component';
import { BuyT1Component } from './australia/buy-t1/buy-t1.component';
import { Book1Component } from './australia/book1/book1.component';
import { WalletComponent } from './wallet/wallet.component';


const routes: Routes = [
  {path:'ateam',component :AteamComponent},
  {path:'buy-t1',component:BuyT1Component},
  {path:'buy-t1/book1',component:Book1Component},
  {path:'wallet',component:WalletComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
