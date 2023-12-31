import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductosRoutingModule } from './productos-routing.module';
import { ProductosComponent } from './pages/productos/productos.component';
import { CardComponent } from './components/card/card.component';
import { HeavymetalComponent } from './pages/heavymetal/heavymetal.component';
import { DeathmetalComponent } from './pages/deathmetal/deathmetal.component';
import { ThrashmetalComponent } from './pages/thrashmetal/thrashmetal.component';
import { CardCollaresComponent } from './components/card-collares/card-collares.component';


@NgModule({
  declarations: [
    ProductosComponent,
    HeavymetalComponent,
    DeathmetalComponent,
    ThrashmetalComponent,
    CardComponent,
    CardCollaresComponent,

  ],
  imports: [
    CommonModule,
    ProductosRoutingModule,
  ],
  exports:[
    CardComponent,
    HeavymetalComponent,
    DeathmetalComponent,
    ThrashmetalComponent,
    ProductosComponent
  ],
})
export class ProductosModule { }
