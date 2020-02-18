import { Component, OnInit, HostBinding} from '@angular/core';
import { ProductosService} from '../services/productos.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-toallas',
  templateUrl: './toallas.component.html',
  styleUrls: ['./toallas.component.scss']
})
export class ToallasComponent implements OnInit {
  @HostBinding('class') classes = 'row';
  
  arrayproductos: any = [];
  
  constructor(private router: Router, private list_producto: ProductosService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      if(params['id']!=null){
          var id = params['id'];
      }  
      this.list_producto.getcategoriaProduct(id).subscribe(
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