import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

 @ViewChild('txtprogres', { static: false }) txtprogres: ElementRef;

 @Input() leyenda:string = 'Leyenda';

 @Input() progreso:number = 50;

 @Output() cambiovalorevenemitter: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onChanges(event:number) {

   // let elementHTML: any = document.getElementsByName('progreso')[0];



    if (event >= 100) {
      this.progreso = 100;
    } else if (event <=0){
      this.progreso = 0;
    } else {
    this.progreso = event;
    }

    // elementHTML.values = this.progreso;

    this.txtprogres.nativeElement.value = this.progreso;

    this.cambiovalorevenemitter.emit(this.progreso);
  }
  cambiarValor(numeroprogreso: number) {

    if (this.progreso >= 100 && numeroprogreso > 0) {
      this.progreso = 100;
      return;
    }
    if (this.progreso <= 0 && numeroprogreso < 0) {
      this.progreso = 0;
      return;
    }
    this.progreso = this.progreso + numeroprogreso;

    this.cambiovalorevenemitter.emit(this.progreso);
    }

}
