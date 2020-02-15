import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';
import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.scss']
})
export class DestacadoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  arrayproductos: any = [];
  result : any = [];
 
  constructor(private router: Router, private list_producto: ProductosService, private filter: FilterPipe) { 
    this.list_producto.getAllProducts().subscribe(
      res => {
        this.arrayproductos = res;
        this.result = this.filter.transform(this.arrayproductos[0], { oferta: '1' });
        console.log(this.result);
      },
      err => console.error(err)
    );
  }
 
  ngOnInit() {    
   }
 
}