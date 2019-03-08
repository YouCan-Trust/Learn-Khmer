import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.page.html',
  styleUrls: ['./photos.page.scss'],
})
export class PhotosPage implements OnInit {

  @ViewChild('slides') slides: any;

  slideOpts = {
    loop: true,
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
  };

  
  constructor() { }

  ngOnInit() {
  }

  prevSlide() {
    this.slides.slidePrev();
  }

  nextSlide() {
    this.slides.slideNext();
  }


}
