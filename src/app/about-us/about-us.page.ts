import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.page.html',
  styleUrls: ['./about-us.page.scss'],
})
export class AboutUsPage implements OnInit {

  id: string = '46';

  items: Array<any> = [
    {
      isOpen: false,
      name: 'Intercultural Dialogue',
      description: 'Intercultural Dialogue as a new Key Competence'
    },
    {
      isOpen: false,
      name: 'iiCamp',
      description: 'International Youth Work and Experience'
    }
  ];

  constructor(public router: Router) { }

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


}
