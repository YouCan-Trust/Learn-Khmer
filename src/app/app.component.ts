import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {

  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'About Us',
      url: '/tabs/about-us',
      icon: 'star'
    },
    {
      title: 'Photos',
      url: '/tabs/photos',
      icon: 'images'
    },
    {
      title: 'Information',
      url: '/tabs/information',
      icon: 'information-circle-outline'
    },
    {
      title: 'Friends',
      url: '/tabs/friends',
      icon: 'contacts'
    }
  ];
  
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
