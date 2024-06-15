import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { LayoutWithNavbarComponent } from './layout-with-navbar/layout-with-navbar.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FeedbackComponent } from './feedback/feedback.component';

export const routes: Routes = [
    // Routes with navbar
    {
        path: '',
        component: LayoutWithNavbarComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'menu', component: MenuComponent },
            { path: 'feedback', component: FeedbackComponent },
            { path: 'contact-us', component: ContactUsComponent },
            // Define other routes here
        ]
    },
    // Routes without the navbar
    { path: 'login', component: LoginComponent },
    { path: 'sign-up', component: SignUpComponent },
];