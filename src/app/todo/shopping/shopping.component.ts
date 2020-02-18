import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../services/productos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping',
  templateUrl: './shopping.component.html',
  styleUrls: ['./shopping.component.scss']
})
export class ShoppingComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  arrayproductos: any = [];
  p : number = 1;
  constructor(private router: Router, private list_producto : ProductosService) { }
 
  ngOnInit() {
    this.list_producto.getAllProducts().subscribe(
      res => {
        console.log(res);
        this.arrayproductos = res;
      },
      err => console.error(err)
    );
    
   }
   
}

