import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, NgbCarouselModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  menuObject: any = {};

  ngOnInit() {
    this.getMenuObject();
  }
  getMenuObject() {
    fetch('../../assets/data/categories.json').then(response => response.json()).then(data => {
      this.menuObject = data
    })
  }
}
