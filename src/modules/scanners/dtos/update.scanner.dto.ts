import { Vendor } from '../../../core/enums/vendors.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { TypeModule } from '../../../core/enums/types-module.enum';

export class UpdateScannerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  name: string;

  @IsOptional()
  @IsEnum(Vendor)
  @IsString()
  vendor?: string;

  @IsOptional()
  @IsEnum(TypeModule)
  @IsString()
  type?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  weight?: number;

  @IsOptional()
  @IsNumber()
  price?: number;
}
