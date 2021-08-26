import {direccion} from '../modelos/direccion';
export interface direccionServices{
    getDireccionById(id:number):direccion;
}