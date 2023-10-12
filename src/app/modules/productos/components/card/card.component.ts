import { Component } from '@angular/core';
import  {Producto} from 'src/app/models/producto'
import { CrudService } from 'src/app/modules/admin/service/crud.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  
  //COLECCION PARA PRODUCTOS BASADA EN LA INTERFAZ PRODUCTO
  coleccionProductos: Producto[] = [];

  productosSeleccionado!: Producto;

  modalVisible: boolean = false

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOninit(): void{
    this.servicioCrud.obtenerProducto().subscribe(producto => {
      this.coleccionProductos = producto;
    })
  }

  mostrarVer(info: Producto){ //boton de la card para ver mas informacion
    this.modalVisible = true;
    
    //mostramos la informacion del producto
    this.productosSeleccionado = info;
  }
}
