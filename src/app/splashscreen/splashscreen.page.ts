import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.page.html',
  styleUrls: ['./splashscreen.page.scss'],
})
export class SplashscreenPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigateByUrl('/home'); // /tabs/about-us
    }, 3000);
  }

  navigateToTabsPage() {
    console.log("naviagte..");
    // this.router.navigate(['/settings']);
    //you can use either of below
    // this.router.navigateByUrl('/tabs/about-us');
    //this.navCtrl.navigateRoot('/app/tabs/(home:home)')
    // this.router.
  }


}
