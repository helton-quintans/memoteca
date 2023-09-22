import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css']
})
export class ListarPensamentoComponent implements OnInit {

  listaPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho',
      autoria: 'Componente PAI',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @input()',
      autoria: 'Componente filho',
      modelo: 'modelo2'
    },
    {
      conteudo: 'DEUS HABITA no centro do meu ser. Deus é paz; essa Paz me envolve em seu seio agora. Há um profundo sentimento de segurança, vitalidade e força por trás dessa paz. Esse sentimento interior de paz, em que agora habito, é a Presença Meditativa Silenciosa de Deus. O Amor e a Luz de Deus velam por mim, como uma mãe extremada vela pelo filho adormecido. No fundo de meu coração está a Sagrada Presença, que é paz, força e fonte de suprimento. Todo o meu medo desapareceu. Vejo Deus em todas as pessoas; vejo Deus se manifestar em todas as coisas. Sou um instrumento da Presença Divina. Libero agora essa paz interior; flui por todo o meu ser, dissolvendo os problemas. É a paz que transcende à compreensão.',
      autoria: 'Joseph Murphy',
      modelo: 'modelo2'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
