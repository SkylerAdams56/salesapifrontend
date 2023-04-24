import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})
export class MenubarComponent {

  menus: Menu[] = [
    new Menu("Employee", "/employee/list"),
    new Menu("Order", "/order/list"),
    new Menu("Login", "/employee/login")
  ]
}
