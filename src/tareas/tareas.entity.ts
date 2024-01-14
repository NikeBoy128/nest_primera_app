import { IsNumber, IsString } from "class-validator/types/decorator/decorators";

 export enum EstadoTarea {
    pendiente= 'pendiente',
    enProceso= 'en proceso',
    terminada= 'terminada',

}
 export class tareas{
 
    id: number;

    titulo: string;

    descripcion: string;
    estado: EstadoTarea;
}
