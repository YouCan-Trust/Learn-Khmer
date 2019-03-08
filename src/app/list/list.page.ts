import { Component, OnInit, NgZone } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  list_items: Array<any> = [];
  items: Array<any> = [];

  searchQuery: string = '';
  selectedItem: number;

  audio: any;

  isLoading: boolean = true;

  constructor(private http: HttpClient, public zone: NgZone,
    private router: Router, public platform: Platform) {
  }

  ngOnInit() {
    // this.http.get("/assets/data.json")
    //   .subscribe(
    //     (res) => {
    //       this.list_items = res["list_items"];
    //       // console.log("List Items: " + JSON.stringify(this.items));
    //       this.initializeItems();
    //     },
    //     (err) => {
    //       console.log("Error in getting List data.. " + err);
    //     }
    //   );
  }

  // ngOnDestroy() {
  //   console.log("ngDestroy..");
  //   if (this.audio) {
  //     this.audio.pause();
  //     this.audio = null;
  //   }
  // }

  ionViewDidLeave() {
    // console.log("view");
    this.searchQuery = '';
    this.isLoading = true;
    if (this.audio) {
      this.selectedItem = undefined;
      this.audio.pause();
      this.audio = null;
    }
  }

  
  ionViewWillEnter() {
    this.http.get("/assets/data.json")
      .subscribe(
        (res) => {
          this.list_items = res["list_items"];
          // console.log("List Items: " + JSON.stringify(this.items));
          this.initializeItems();
        },
        (err) => {
          console.log("Error in getting List data.. " + err);
        }
      );
  }

  initializeItems() {
    this.items = this.list_items;
    this.isLoading = false;
  }

  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();
    // set val to the value of the searchbar
    const val = ev.target.value;
    // console.log("Value: " + val);
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item: any) => {
        return (item.title.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  async playAudio(index, item) {
    console.log("play");

    if (this.selectedItem == undefined) {
      this.selectedItem = index;
      this.audio = new Audio();
      this.audio.src = '../../' + item.audio;
      await this.audio.load();
      await this.audio.play();
      // this.audio.loop = true;
      this.audio.onended = () => {
        console.log("after play");
        this.selectedItem = undefined;
      }
    }
    else {
      this.selectedItem = index;
      this.audio.pause();
      this.audio = new Audio();
      this.audio.src = '../../' + item.audio;
      await this.audio.load();
      await this.audio.play();
      // this.audio.loop = true;
      this.audio.onended = () => {
        console.log("after play");
        this.selectedItem = undefined;
        // if (this.selectedItem == index) {
        //   this.selectedItem = undefined;
        //   console.log("current play..")
        // }
      }
    }

  }

  stopAudio(index, item) {
    console.log("stop");
    this.selectedItem = undefined;

    this.audio.pause();

    // setTimeout(() => {
    //   console.log("Resume..")
    //   this.audio.play();
    // }, 5000);
  }


  
  clearFilters() {
    console.log("Clear filters..");
    this.searchQuery = '';
    this.initializeItems();
  }


}
