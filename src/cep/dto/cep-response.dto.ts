import { ApiProperty } from '@nestjs/swagger';

export class CepResponseDto {
  @ApiProperty({ example: '01001-000' })
  cep: string;

  @ApiProperty({ example: 'São Paulo' })
  cidade: string;

  @ApiProperty({ example: 'SP' })
  estado: string;
}
