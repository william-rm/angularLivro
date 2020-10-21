import { Component, Input, OnInit } from '@angular/core';
import { Livro } from '../livro.model';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css']
})
export class LivroListaComponent implements OnInit {

  /*livros = [
    {
    id: 'José',
    titulo: '11223344',
    autor: 'jose@email.com',
    NumeroPaginas: 'jose@email.com',
    },
    {
    id: 'Maria',
    titulo: '22334455',
    autor: 'maria@email.com',
    NumeroPaginas: 'maria@email.com',
    },
    ];*/

  @Input() livros: Livro[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
