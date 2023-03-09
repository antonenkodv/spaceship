import { Vendor } from '../../../core/enums/vendors.enum';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { TypeModule } from '../../../core/enums/types-module.enum';

export class CreateScannerDto {
  @IsNotEmpty()
  @IsString()
  @MaxLength(12)
  name: string;

  @IsNotEmpty()
  @IsEnum(Vendor)
  @IsString()
  vendor: string;

  @IsNotEmpty()
  @IsEnum(TypeModule)
  @IsString()
  type: string;

  @IsNotEmpty()
  @IsNumber()
  weight: number;

  @IsNotEmpty()
  @IsNumber()
  price: number;
}
