import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: './splashscreen/splashscreen.module#SplashscreenPageModule'
  },  
  { 
    path: 'home', 
    loadChildren: './tabs/tabs.module#TabsPageModule' 
  },
  {
    path: 'tabs',
    loadChildren: './tabs/tabs.module#TabsPageModule'
  },
  // { 
  //   path: 'tabs/home', 
  //   loadChildren: './tabs/tabs.module#TabsPageModule' 
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
