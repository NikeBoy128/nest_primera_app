import { Injectable } from '@nestjs/common';
import { EstadoTarea } from './tareas.entity';
import { tareas } from './tareas.entity';
import { UpdateTareaDto } from './dto/tareas.dto';
@Injectable()
export class TareasService {
    private tareas:tareas[] = [
        {
            id:1,
            titulo: 'Tarea 1',
            descripcion: 'Descripcion 1',
            estado: EstadoTarea.pendiente
        },
        {
            id:2,
            titulo: 'Tarea 2',
            descripcion: 'Descripcion 2',
            estado: EstadoTarea.enProceso
        },
        {
            id:3,
            titulo: 'Tarea 3',
            descripcion: 'Descripcion 3',
            estado: EstadoTarea.terminada
        }
        
    ];
    getTareas(){
        return this.tareas;
    };
    getTareaById(id:number){
        return  this.tareas.find(tarea => tarea.id === id);

    }
    updateTarea(id:number,updateFields:UpdateTareaDto):tareas{
        
        const updateTarea=this.getTareaById(id);
        if(updateTarea){
            Object.assign(updateTarea,updateFields);
            this.tareas = this.tareas.map(tarea => tarea.id === id ? updateTarea : tarea);
        }
        
        return updateTarea;
    };
    deleteTarea(id:number){
         this.tareas= this.tareas.filter(tareas => tareas.id !== id);
    };
    createTarea(titulo:string, descripcion:string){
        const newTarea:tareas = {
            id: this.tareas.length + 1,
            titulo,
            descripcion,
            estado: EstadoTarea.pendiente
        };
        this.tareas.push(newTarea);
        return newTarea;
        }
    };

