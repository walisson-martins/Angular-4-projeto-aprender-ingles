import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  OnDestroy,
} from "@angular/core";

import { Frase } from "../shared/frase.model";
import { FRASES } from "./frases.mock";

@Component({
  selector: "app-painel",
  templateUrl: "./painel.component.html",
  styleUrls: ["./painel.component.css"],
})
export class PainelComponent implements OnInit, OnDestroy {
  public frases: Frase[] = FRASES;
  public instrucao: string = "Traduza a frase";
  public resposta: string = "";

  public rodada = 0;
  public rodadeFrase: Frase;

  public progresso = 0;
  public tentativas: number = 3;

  //emissor de evento

  @Output() public encerrarJogo: EventEmitter<string> = new EventEmitter();

  constructor() {
    this.atualizaRodada();
  }

  inserir(): void {
    // console.log(this.frases);
  }

  ngOnDestroy(): void {
    
    // console.log("Component painel foi destruído");
  }

  ngOnInit(): void {}

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value;
    // console.log(this.resposta);
  }

  public verificarResposta(): void {
    // console.log(this.tentativas);
    if (this.rodadeFrase.FrasePtBr == this.resposta) {
      //trocar para próxima rodada
      this.rodada++;

      this.progresso = this.progresso + 100 / this.frases.length;
      // console.log(this.progresso);

      //atualiza a rodade de frase
      this.rodadeFrase = this.frases[this.rodada];

      if (this.rodada === 4) {
        //emissor de evento
        this.encerrarJogo.emit("vitoria");
      }

      this.atualizaRodada();
    } else {
      this.tentativas--;

      if (this.tentativas === -1) {
        //emissor de evento
        this.encerrarJogo.emit("derrota");
      }
    }
    // console.log(this.tentativas);
    //trocar pergunta da rodada
  }

  public atualizaRodada(): void {
    this.rodadeFrase = this.frases[this.rodada];
    this.resposta = "";
    // console.log(this.rodadeFrase);
  }
}
