import { Injectable } from '@nestjs/common';
import { CepResponseDto } from './dto/cep-response.dto';
import { CepStrategy } from './strategies/cep-strategy.interface';
import { ViaCepStrategy } from './strategies/viacep.strategy';
import { BrasilApiStrategy } from './strategies/brasilapi.strategy';

@Injectable()
export class CepService {
  private readonly strategies: CepStrategy[];

  constructor() {
    this.strategies = [new ViaCepStrategy(), new BrasilApiStrategy()];
  }

  async getCepInfo(cep: string): Promise<CepResponseDto> {
    const [first, second] = this.strategies.sort(() => Math.random() - 0.5);

    try {
      return await first.fetchCep(cep);
    } catch {
      return await second.fetchCep(cep);
    }
  }
}
