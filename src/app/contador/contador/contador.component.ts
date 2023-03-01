import {Component} from "@angular/core";

@Component({
  selector: 'app-contador',
  templateUrl: 'contador.component.html'
})
export class ContadorComponent{
  title: string = 'Contador App';
  numero: number = 0;
  base : number = 5;
  acumular(valor: number) {
    if(this.numero === 0 && valor === -5) {
      this.numero = 0;
      return;
    }
    this.numero += valor;
  }
}
