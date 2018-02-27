//import { Http } from '@angular/http';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
//import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Contato } from '../models/contato';


@Injectable()
export class ContatoService {
  contato: any = {};
  
  constructor(private http:HttpClient,private router: Router, private route: ActivatedRoute) { }
  
  public contatosBS = new BehaviorSubject<Object>(null);

  register(user){
 //     return this.http.post('http://localhost:3000/contatos/',user)
 //     .map(res => res.json());
      return this.http.post('http://localhost:3000/contatos/',user);
  }

  consultarTodos(){
//    return this.http.get('http://localhost:3000/contatos/')
//   .map(res => {res.json()});
    return this.http.get<Contato>('http://localhost:3000/contatos');
  }

  consulta(user){
//    return this.http.get('http://localhost:3000/contatos/'+user)
//   .map(res => res.json());
    return this.http.get('http://localhost:3000/contatos/'+user);
  }

  substituir(id, user){
    return this.http.put('http://localhost:3000/contatos/'+id,this.contato).map(res => 
    {
      let id = res['_id'];
      this.router.navigate(['/contatos/'])
    });
  }

  deletar(id){
    return this.http.delete('http://localhost:3000/contatos/'+id).map(res => {
      this.router.navigate(['/contatos']);
      },
      (err) =>{
        console.log(err);
      });
  }
}

