import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent {

heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];

heroesBorrados: string[] = [];
borrarHeroe(index: number, heroe: string): void {
    this.heroesBorrados.push(heroe);
    this.heroes.splice(index, 1);
}
}
