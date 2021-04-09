import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-progresso",
  templateUrl: "./progresso.component.html",
  styleUrls: ["./progresso.component.css"],
})
export class ProgressoComponent implements OnInit {
  //@Input passa parametros/variaveis para componentes filhos
  //posso colorcar xyz como atributo   @Input('xyz') e pegar no template dentro do []
  @Input() public progresso: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
