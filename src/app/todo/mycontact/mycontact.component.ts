import { Component, OnInit, HostBinding} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute} from '@angular/router';
import { ContactitoService } from '../services/contactito.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-mycontact',
  templateUrl: './mycontact.component.html',
  styleUrls: ['./mycontact.component.scss']
})
export class MycontactComponent implements OnInit {
  title = 'validación';
  userEmails = new FormGroup({
    primaryEmail: new FormControl('',[
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")
    ])  
      ///^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/    
  }); 
  get primEmail(){
    return this.userEmails.get('primaryEmail')
  }
  @HostBinding('class') classes = 'row';
  constructor(public _ContactitoService: ContactitoService, private router: Router, private route: ActivatedRoute) { }
  public contactForm2(form) {
    this._ContactitoService.sendContacto(form).subscribe(() => {
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
  ngOnInit() { }  
}
