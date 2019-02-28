import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '',
            loadChildren: '../home/home.module#HomePageModule'
          }
        ]
      },
      {
        path: 'list',
        children: [
          {
            path: '',
            loadChildren: '../list/list.module#ListPageModule'
          }
        ]
      },
      {
        path: 'about-us',
        children: [
          {
            path: '',
            loadChildren: '../about-us/about-us.module#AboutUsPageModule'
          }
        ]
      },
      {
        path: 'photos',
        children: [
          {
            path: '',
            loadChildren: '../photos/photos.module#PhotosPageModule'
          }
        ]
      },
      {
        path: 'information',
        children: [
          {
            path: '',
            loadChildren: '../information/information.module#InformationPageModule'
          }
        ]
      },
      {
        path: 'friends',
        children: [
          {
            path: '',
            loadChildren: '../friends/friends.module#FriendsPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }
