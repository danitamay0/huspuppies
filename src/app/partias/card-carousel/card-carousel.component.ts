import { Component, Input, OnInit } from '@angular/core';
import { Producto } from 'src/app/models/productoModel';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-card-carousel',
  templateUrl: './card-carousel.component.html',
  styleUrls: ['./card-carousel.component.scss']
})
export class CardCarouselComponent implements OnInit {
  @Input('producto') producto:Producto
  @Input('buttons') buttons:string
  constructor( public _carrito : CarritoService) { }

  ngOnInit(): void {
    
  }

  agregar(prod:Producto){
   
    if(prod.agregado == true){

      prod.agregado = false
      this._carrito.restar();

    }else{

      prod.agregado = true
      this._carrito.sumar();

    }
  }

}
