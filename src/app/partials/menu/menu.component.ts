import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  public minPedido = 30000;
  public menuItems = [
    {nombre:'Hombre'},
    {nombre:'Mujer'},
    {nombre:'Blog'},
    {nombre:'Historia'},
    {nombre:'Tienda'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
