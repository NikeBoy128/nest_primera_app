import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";

 export class CreateTareaDto{
    @ApiProperty()
    @IsNumber()
    id: number;
    @ApiProperty()
    @IsString()
    titulo: string;
    @ApiProperty()
    @IsString()
    descripcion: string;
}

export class UpdateTareaDto{
    @ApiProperty()
    @IsNumber()
    id?: number;
    @ApiProperty()
    @IsString()
    titulo?: string;
    @ApiProperty()
    @IsString()
    descripcion?: string;
}