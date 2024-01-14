import { Body, Controller, Get, Post, Delete, Param, Patch, UploadedFiles, ParseIntPipe } from '@nestjs/common';
import { TareasService } from './tareas.service';
import { CreateTareaDto,UpdateTareaDto } from './dto/tareas.dto';
@Controller('tareas')
export class TareasController {
  constructor(private tareasService: TareasService) {}
  @Get()
  getTareas() {
    return this.tareasService.getTareas();
  }
  @Post()
  createTarea(@Body() body: CreateTareaDto) {
    return this.tareasService.createTarea(body.titulo, body.descripcion);
  }
  @Delete(':id')
  deleteTarea(@Param('id',ParseIntPipe) id: number) {
    return this.tareasService.deleteTarea(id);
  }

  @Patch(':id')
  updateTarea(@Param('id',ParseIntPipe) id:number,@Body() UploadedFiles:UpdateTareaDto){
     return this.tareasService.updateTarea(id,UploadedFiles)

  }
}
