import axios from 'axios';
import { Injectable, HttpException } from '@nestjs/common';
import { CepResponseDto } from '../dto/cep-response.dto';
import { CepStrategy } from './cep-strategy.interface';

@Injectable()
export class ViaCepStrategy implements CepStrategy {
  async fetchCep(cep: string): Promise<CepResponseDto> {
    const { data } = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
    if (data.erro) throw new HttpException('CEP não encontrado no ViaCEP', 404);
    return {
      cep: data.cep,
      cidade: data.localidade,
      estado: data.uf,
    };
  }
}
