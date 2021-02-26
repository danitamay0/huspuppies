import { Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Producto } from 'src/app/models/productoModel';
import { ProductoService } from 'src/app/services/producto.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  @Input('buttons') buttons:string;
  @Input('titulo') titulo:string;
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    autoHeight: true,
    navText: ['', ''],
    
    nav: true
  }
  productos:Array<Producto>;
  constructor(public _producto:ProductoService) { }
  
  ngOnInit(): void {
    this._producto.productos$.subscribe(data=>{
        this.productos = data;
        console.log(data,  'sdsd');
        
    })
  }

}
