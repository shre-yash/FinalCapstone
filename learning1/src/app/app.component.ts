import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Comp1Component } from './Components/header/comp1.component';
import { HamburgerMenuComponent } from './Components/hamburger-menu/hamburger-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Comp1Component, HamburgerMenuComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'learning1';
}
