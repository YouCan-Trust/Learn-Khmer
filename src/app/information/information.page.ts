import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  isPlaying: boolean;
  audio: any;

  items: Array<any> = [
    {
      isOpen: false,
      name: 'Facts and Statistics'
    },
    {
      isOpen: false,
      name: 'Customs and Etiquette'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  toggleSection(index) {
    for (let i = 0; i < this.items.length; i++) {
      if (i == index) {
        this.items[index].isOpen = !this.items[index].isOpen;
      }
      else {
        this.items[i].isOpen = false;
      }
    }
  }

  async playAudio() {
    console.log("play");
    this.isPlaying = true;
    this.audio = new Audio();
    this.audio.src = '../../assets/audio/CambodiaAnthem.mp3';
    await this.audio.load();
    await this.audio.play();
    // this.audio.loop = true;
    this.audio.onended = () => {
      console.log("after play");
      this.isPlaying = false;
    }

  }

  stopAudio() {
    console.log("pause");
    this.isPlaying = false;
    this.audio.pause();
  }

  ionViewDidLeave() {
    console.log("View Did Leave..");
    this.isPlaying = false;
    if (this.audio) {
      this.audio.pause();
      this.audio = null;
    }
  }



}
