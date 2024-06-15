import { Component } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { MenuComponent } from '../menu/menu.component';
import { ContactUsComponent } from '../contact-us/contact-us.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout-with-navbar',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, HomeComponent, MenuComponent, ContactUsComponent, FooterComponent],
  templateUrl: './layout-with-navbar.component.html',
  styleUrl: './layout-with-navbar.component.css'
})
export class LayoutWithNavbarComponent {

}
