import { Component, OnInit } from '@angular/core';
import { ContatoService } from '../../services/contato.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Http } from '@angular/http';
import { Contato } from '../../models/contato';



@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  contatos = {};
  contato: any = {};

  constructor(private http: HttpClient, private contatoService : ContatoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.contatoService.consultarTodos().subscribe(contatos => {
      this.http.get('http://localhost:3000/contatos').subscribe(dados => {
        this.contatos = dados;
      });
    });
    if(this.contato === null){

    }else{
      this.editarContato(this.route.snapshot.params['id']);
    }
  }

  editarContato(id){
    this.http.get('http://localhost:3000/'+id)
    .subscribe(dados => {
      this.contato = dados;
    });
  }
    
  atualizarCadastro(id,contato){
      this.http.put('http://localhost:3000/contatos/'+id, this.contato)
        .subscribe(res => {
          let id = res['_id'];
          this.router.navigate(['/editarPessoa']);
        }, (err)=> {
          console.log(err);
        });
  }

  organizarContatos(val) {
    val = Array.from(val);
    return val;
  }

}
