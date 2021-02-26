import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-producto',
  templateUrl: './informacion-producto.component.html',
  styleUrls: ['./informacion-producto.component.scss']
})
export class InformacionProductoComponent implements OnInit {
  @Input('titulo') titulo:string;
  @Input('detalle') detalle:string;

  constructor() { 
    console.log(this.detalle,'asas');
    
  }

  ngOnInit(): void {
  }

}
