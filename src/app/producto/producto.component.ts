import { Component, OnInit } from '@angular/core';
import { Producto } from '../models/productoModel';
import { CarritoService } from '../services/carrito.service';
import { ProductoService } from '../services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {
  prod :Producto 
  tallaSelected : number;
  tallas:any = [  {numero:5},{numero:5.5},{numero:6},{numero:6.5},{numero:7},{numero:7.5},{numero:8},{numero:8.5},{numero:9},{numero:9.5 }];
  constructor( public _producto : ProductoService ,
    public _carrito : CarritoService ) { }

  ngOnInit(): void {
    this._producto.producto$.subscribe(p=>{
      this.prod = p;
      this.tallas[0].selected = true; 
      this.tallaSelected =   this.tallas[0].numero;
    })
  }

  select(i:number){
  
    //deseleccionar
    this.tallas.forEach( t=>t.selected = false );
    //seleccionar
    this.tallas[i].selected = true;
    this.tallaSelected =   this.tallas[i].numero;
  }

  agregar(){
    if(this.prod.agregado == true){

      this.prod.agregado = false
      this._carrito.restar();

    }else{

      this.prod.agregado = true
      this._carrito.sumar();

    }
  }
}
