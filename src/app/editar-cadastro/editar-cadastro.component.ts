import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ContatoService } from '../services/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';

import { Mask } from '@fagnerlima/ng-mask';

@Component({
  selector: 'app-editar-cadastro',
  templateUrl: './editar-cadastro.component.html',
  styleUrls: ['./editar-cadastro.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class EditarCadastroComponent implements OnInit {

  contato : any = {};

  readonly dataEstilo: string = '99/99/9999';
  readonly telefoneEstilo: string = '(99) 99999-9999';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
      this.getContato(this.route.snapshot.params['id']);
  }

  getContato(id){
    this.http.get('http://localhost:3000/contatos/'+id)
      .subscribe(dados => {
        this.contato = dados;
      });
  }

  atualizarContato(id,contato){
    this.http.put('http://localhost:3000/contatos/'+id, this.contato)
      .subscribe(res => {
        let id = res['id'];
        this.router.navigate(['/consulta/']);
      }, (err) =>{
        console.log(err);
      });
  }

  deletarContato(id){
    this.http.delete('http://localhost:3000/contatos/'+id)
      .subscribe(res => {
        this.router.navigate(['/consulta']);
      }, (err) => {
        console.log(err);
      }
    );
  }
}
