import { Component, OnInit, HostBinding} from '@angular/core';
import { ProductosService} from '../services/productos.service';
import { Router, ActivatedRoute} from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MessageService } from '../services/message.service';
import Swal from 'sweetalert2';

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
  
  constructor(public _MessageService: MessageService, private router: Router, private list_producto: ProductosService, private route: ActivatedRoute) { 
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
  public contactForm(form) {
    this._MessageService.sendMessage(form).subscribe(() => {
      Swal.fire({
        title: 'Estás seguroe?',
        text: 'Su mensage será enviado al departamento de ventas',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Si, Enviando!',
        cancelButtonText: 'No, puede volver a intentarlo'
      }).then((result) => {
        if (result.value) {
        Swal.fire(
          'Enviado',
          'Su mensage será enviado al departamento de ventas',
          'success'
        )
        // For more information about handling dismissals please visit
        // https://sweetalert2.github.io/#handling-dismissals
        } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelado',
          'puede intentar mas tarde :)',
          'error'
        )
        }
      })
    });
    }   
  ngOnInit() { 
       
   }   
   
}
