import { Component, OnInit, HostBinding} from '@angular/core';
import { ProductosService} from '../services/productos.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-myform',
  templateUrl: './myform.component.html',
  styleUrls: ['./myform.component.scss']
})
export class MyformComponent implements OnInit {
  title = 'validación';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])  
      ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/    
    }); 
    get primEmail(){
      return this.userEmails.get('primaryEmail')
    }
  @HostBinding('class') classes = 'row';
  
  arrayproductos: any = [];
  
  constructor(private router: Router, private list_producto: ProductosService, private route: ActivatedRoute) { 
    this.route.params.subscribe(params => {
      if(params['id']!=null){
          var id = params['id'];
      }  
      this.list_producto.getSingleProduct(id).subscribe(
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
