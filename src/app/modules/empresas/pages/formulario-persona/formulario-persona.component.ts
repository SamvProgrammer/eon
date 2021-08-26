import { Component, OnInit,EventEmitter, Output, Input, OnChanges,SimpleChanges, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { persona } from 'src/app/core/modelos/persona';
declare var Swal;

@Component({
  selector: 'app-formulario-persona',
  templateUrl: './formulario-persona.component.html',
  styleUrls: ['./formulario-persona.component.scss']
})
export class FormularioPersonaComponent implements OnInit,OnChanges {
  public myform:FormGroup;
  @Output() public salida:EventEmitter<persona> = new EventEmitter<persona>();
  @Input() persona:persona;
  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.myform = this.crearFormulario(undefined);
  }


  public crearFormulario(persona:persona){
    console.log(persona);
     return this.fb.group({
       nombre:[persona?.nombre,[Validators.required,Validators.minLength(8)]],
       edad:[persona?.edad,[Validators.required]],
       frase:[persona?.frase,[Validators.required,Validators.minLength(8)]],
       direccion:this.fb.group({
         id:[persona?.direccion.id,[Validators.required,Validators.pattern('^[0-9]*$')]],
         calle:[persona?.direccion.calle,[Validators.required,Validators.minLength(8)]],
         colonia:[persona?.direccion.colonia,[Validators.required,Validators.minLength(8)]],
         pais:[persona?.direccion.pais,[Validators.required]],
       })
     });
  }


  public enviarFormulario(){
    
    if(this.myform.invalid){

      Swal.fire(
        'Aviso!',
        'Campos obligatorios o invalidos!',
        'error'
      )
      
      Object.values(this.myform.controls).forEach(control =>{
        control.markAsTouched();
        if(Boolean(control["controls"])){
            Object.values(control["controls"]).forEach((control2:any)=>{
              control2.markAsTouched();
            });
        }
      });
      return;
    }

    this.guardar();

  }


  public get f(){
    return this.myform.controls;
  }

  public get fgroup(){
    return this.myform.controls.direccion["controls"];
  }


  public guardar(){
    this.salida.emit(this.myform.value);
  }

  ngOnChanges(changes: SimpleChanges): void{
      this.myform = this.crearFormulario(this.persona);
  }



}
