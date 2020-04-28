import { Component, OnInit, HostBinding} from '@angular/core';
import { ProductosService} from '../services/productos.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detalleproducto',
  templateUrl: './detalleproducto.component.html',
  styleUrls: ['./detalleproducto.component.scss']
})
export class DetalleproductoComponent implements OnInit {
 
  
    @HostBinding('class') classes = 'row';
  
    arrayproductos: any = [];
    
    constructor(private router: Router, private list_producto: ProductosService, private route: ActivatedRoute) { 
      this.route.params.subscribe(params => {
        if(params['id']!=null){
            var id = params['id'];
        }  
        this.list_producto.getOneProduct(id).subscribe(
          res => {
            console.log(res);
            this.arrayproductos = res;
          },
          err => console.error(err)
        );
      });   
    }
   
    ngOnInit() { 
         
     }   
  }
