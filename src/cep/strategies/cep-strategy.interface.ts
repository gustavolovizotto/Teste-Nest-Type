import { CepResponseDto } from '../dto/cep-response.dto';

export interface CepStrategy {
  fetchCep(cep: string): Promise<CepResponseDto>;
}
