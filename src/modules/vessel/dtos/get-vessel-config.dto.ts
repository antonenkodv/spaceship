import { IsNumber, IsOptional } from 'class-validator';
import { Type } from 'class-transformer';

export class GetVesselConfigDto {
  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  max_price?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  journey_distance?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  max_weight?: number;
}
