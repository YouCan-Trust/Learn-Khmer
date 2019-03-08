import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.page.html',
  styleUrls: ['./friends.page.scss'],
})
export class FriendsPage implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

  navigateToFrndInfo() {
    // console.log("Info Page..");
    this.router.navigateByUrl('/tabs/friends/friends-info');
  }


}
