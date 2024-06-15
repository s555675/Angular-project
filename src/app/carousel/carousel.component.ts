import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})
export class CarouselComponent {
  menuObject: any = {};

  ngOnInit() {
    this.getMenuObject();
  }
  getMenuObject() {
    fetch('../../assets/data/categories.json')
      .then(response => response.json())
      .then(data => {
        this.menuObject = data
      })
  }
}
