import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends-info',
  templateUrl: './friends-info.page.html',
  styleUrls: ['./friends-info.page.scss'],
})
export class FriendsInfoPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToHome() {
    this.router.navigateByUrl('/tabs/friends');
  }


}
