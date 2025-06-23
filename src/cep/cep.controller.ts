import { Controller, Get, Param } from '@nestjs/common';
import { CepService } from './cep.service';
import { CepResponseDto } from './dto/cep-response.dto';
import { ApiOkResponse, ApiTags, ApiParam } from '@nestjs/swagger';

@ApiTags('CEP')
@Controller('cep')
export class CepController {
  constructor(private readonly cepService: CepService) {}

  @Get(':cep')
  @ApiParam({ name: 'cep', type: String, example: '01001000' })
  @ApiOkResponse({
    description: 'Endereço encontrado com sucesso',
    type: CepResponseDto,
  })
  async getCep(@Param('cep') cep: string): Promise<CepResponseDto> {
    return this.cepService.getCepInfo(cep);
  }
}
