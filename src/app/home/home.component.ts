import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { MainSectionComponent } from '../main-section/main-section.component';
import { CarouselComponent } from '../carousel/carousel.component';
import { RestaurantInfoComponent } from '../restaurant-info/restaurant-info.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MainSectionComponent, CarouselComponent, RestaurantInfoComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
