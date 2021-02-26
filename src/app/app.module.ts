import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PublicidadComponent } from './partials/publicidad/publicidad.component';
import { HeaderComponent } from './partials/header/header.component';
import { MaterialModule } from './material/material.module';
import { MenuComponent } from './partials/menu/menu.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';
import { DetalleProductoComponent } from './detalle-producto/detalle-producto.component';
import { ProductoComponent } from './producto/producto.component';

import { ProductoService} from './services/producto.service';
import { InformacionProductoComponent } from './informacion-producto/informacion-producto.component';
import { SliderComponent } from './partials/slider/slider.component'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CardCarouselComponent } from './partias/card-carousel/card-carousel.component';
import { CarritoService } from './services/carrito.service';
import { FooterComponent } from './partias/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicidadComponent,
    HeaderComponent,
    MenuComponent,
    CarritoComprasComponent,
    DetalleProductoComponent,
    ProductoComponent,
    InformacionProductoComponent,
    SliderComponent,
    CardCarouselComponent,
    FooterComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    CarouselModule
  ],
  providers: [ProductoService,CarritoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
