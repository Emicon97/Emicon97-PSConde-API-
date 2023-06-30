import { Type, Types } from '@/enums/userTypes.enum';
import { IsArray, IsEmail, IsIn, IsInt, IsOptional, IsString } from 'class-validator';
export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsOptional()
  @IsString()
  public name: string;

  @IsString()
  public password: string;
}

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  public password: string;

  @IsOptional()
  @IsInt()
  public listaP: number;

  @IsOptional()
  @IsIn(Type)
  public type: Types;

  @IsOptional()
  @IsArray()
  public address: string[];

  @IsOptional()
  @IsArray()
  public availability: string[];

  @IsOptional()
  @IsArray()
  public phone: string[];

  @IsOptional()
  @IsInt()
  public cuit: number;
}
