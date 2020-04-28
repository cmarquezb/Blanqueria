import { Component, OnInit, HostBinding } from '@angular/core';
import { PromocionesService } from '../services/promociones.service';
import { Router, ActivatedRoute } from '@angular/router';
//import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-destacado',
  templateUrl: './destacado.component.html',
  styleUrls: ['./destacado.component.scss']
})
export class DestacadoComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  arrayproductos: any = [];  
 
  constructor(private router: Router, private list_producto: PromocionesService) { 
    //, private filter: FilterPipe
    this.list_producto.getSingleProductsp().subscribe(
      res => {
        this.arrayproductos = res;        
        console.log(this.arrayproductos);
      },
      err => console.error(err)
    );
  }
 
  ngOnInit() {    
   }
 
}