import { Component } from '@angular/core';
import { Producto } from 'src/app/models/producto';
import { CrudService } from 'src/app/modules/admin/service/crud.service';

@Component({
  selector: 'app-card-collares',
  templateUrl: './card-collares.component.html',
  styleUrls: ['./card-collares.component.css']
})
export class CardCollaresComponent {

  coleccionProductos: Producto[] = [] //todos los productos

  collares: Producto[] = []; //producto categoria = collares
  productosSeleccionado!: Producto;

  modalVisible: boolean = false

  constructor(
    public servicioCrud: CrudService
  ){}

  ngOninit(): void {
    this.servicioCrud.obtenerProducto().subscribe( producto => {
      this.coleccionProductos = producto;

      this.mostrarCollares();
    })
  }

  mostrarVer (info: Producto) {
    this.modalVisible = true //al selecionar "ver mas" el modal visible pasa a true
    this.productosSeleccionado = info; //nuestra la informacion del producto que se seleccione
  }

  mostrarCollares(){
    //forEach itera la coleccion/arreglo
    this.coleccionProductos.forEach(producto =>{ 
      
      /*si la categoria del producto es igual a "collares"
      se va a enviar a la coleccion "collares" */
      if(producto.categoria === "collares"){
        this.collares.push(producto);
      }
    })
  }
}
