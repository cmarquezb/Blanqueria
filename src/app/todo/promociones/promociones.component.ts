import { Component, OnInit, HostBinding } from '@angular/core';
import { PromocionesService } from '../services/promociones.service';
import { Router } from '@angular/router';
//import { FilterPipe } from 'ngx-filter-pipe';

@Component({
  selector: 'app-promociones',
  templateUrl: './promociones.component.html',
  styleUrls: ['./promociones.component.scss']
})
export class PromocionesComponent implements OnInit {
  @HostBinding('class') classes = 'row';

  arrayproductos: any = [];
 result : any = [];
 
  constructor(private router: Router, private list_producto: PromocionesService) { 
    //, private filter: FilterPipe
    this.list_producto.getAllProductsp().subscribe(
      res => {
        this.arrayproductos = res;
        this.result = this.arrayproductos;
        //this.filter.transform(this.arrayproductos[0], { oferta: '2' });
        console.log(this.result);
      },
      err => console.error(err)
    );
  }
 
  ngOnInit() {    
   }
 
}