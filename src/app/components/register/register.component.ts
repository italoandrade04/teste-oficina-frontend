import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Router } from '@angular/router';

import { Mask } from '@fagnerlima/ng-mask';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  userExists: boolean = false;

  readonly dataEstilo: string = '99/99/9999';
  readonly telefoneEstilo: string = '(99) 99999-9999';

  constructor(
    private contatoService: ContatoService,
    private router: Router
  ) { }

  ngOnInit() {
  }
  
  register({value, valid}){
    if(valid){
      this.contatoService.register(value).subscribe(res =>{
          if(res == 'userExists'){
            this.userExists = true;
            setTimeout(function(){
              this.userExists=false;
            }.bind(this),2000);
          }else{
            this.router.navigateByUrl('consulta');
          }
      })
    }else{
      console.log("Formulario Invalido");
    }
  }
}
