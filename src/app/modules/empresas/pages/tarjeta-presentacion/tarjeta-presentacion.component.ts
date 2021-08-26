import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { emmiterPersona } from 'src/app/core/modelos/emitterPersona';
import { persona } from 'src/app/core/modelos/persona';

@Component({
  selector: 'app-tarjeta-presentacion',
  templateUrl: './tarjeta-presentacion.component.html',
  styleUrls: ['./tarjeta-presentacion.component.scss']
})
export class TarjetaPresentacionComponent implements OnInit {

  @Input() persona:persona;
  @Output() public salida = new EventEmitter<emmiterPersona>();
  @Input() indice:number;

  constructor() { }

  ngOnInit(): void {
  }


  public editar(){
    this.salida.emit({type:"editar",persona:this.persona,indice:this.indice});
  }

  public eliminar(){
    this.salida.emit({type:"eliminar",indice:this.indice});
  }

}
