import { IsNumber, IsString } from "class-validator";

 export class CreateTareaDto{
    @IsNumber()
    id: number;
    @IsString()
    titulo: string;
    @IsString()
    descripcion: string;
}

export class UpdateTareaDto{
    @IsNumber()
    id?: number;
    @IsString()
    titulo?: string;
    @IsString()
    descripcion?: string;
}