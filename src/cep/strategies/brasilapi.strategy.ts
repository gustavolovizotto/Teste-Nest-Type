import axios from 'axios';
import { Injectable, HttpException } from '@nestjs/common';
import { CepResponseDto } from '../dto/cep-response.dto';
import { CepStrategy } from './cep-strategy.interface';

@Injectable()
export class BrasilApiStrategy implements CepStrategy {
  async fetchCep(cep: string): Promise<CepResponseDto> {
    try {
      const { data } = await axios.get(`https://brasilapi.com.br/api/cep/v1/${cep}`);
      return {
        cep: data.cep,
        cidade: data.city,
        estado: data.state,
      };
    } catch {
      throw new HttpException('CEP não encontrado na BrasilAPI', 404);
    }
  }
}
