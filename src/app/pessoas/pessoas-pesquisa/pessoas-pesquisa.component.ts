import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent  {
  pessoas = [
    { nome: 'Valdir Cordeiro', cidade: 'Turmalina', estado: 'MG', status: true},
    { nome: 'Teobaldo Oliveira', cidade: 'Turmalina', estado: 'MG', status: true},
    { nome: 'Vinicius Trebuchet', cidade: 'Veredinha', estado: 'MG', status: false},
    { nome: 'Cora Coralina', cidade: 'Belo Horizonte', estado: 'MG', status: true},
    { nome: 'Moises Gonçavels', cidade: 'Leme do Prado', estado: 'MG', status: true},
    { nome: 'Arthur Silva', cidade: 'Capelinha', estado: 'MG', status: false},
    { nome: 'Marlon Guido', cidade: 'Jenipapo de Minas', estado: 'MG', status: true},
    { nome: 'Manoel Pinheiro', cidade: 'Uberlândia', estado: 'MG', ativo: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
  ];
}
