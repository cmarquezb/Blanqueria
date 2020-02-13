import { Component, OnInit, HostBinding } from '@angular/core';
import { ProductosService } from '../services/productos.service';
//import { Observable } from 'rxjs';
//import { FlatTreeControl } from '@angular/cdk/tree';
//import { MatTreeFlattener, MatTreeFlatDataSource } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-myproduct',
  templateUrl: './myproduct.component.html',
  styleUrls: ['./myproduct.component.scss']
})
export class MyproductComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  arrayproductos: any = [];

  constructor(private router: Router, private list_producto: ProductosService) { }
 
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


