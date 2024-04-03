import { z } from 'zod';

export const SalaParametrosSchema = z.object({
  tipo: z.enum(['reunião', 'descompressão'], {
    required_error: 'tipo da sala obrigatório',
    invalid_type_error: 'tipo da sala inválido, tipos aceitos "reunião" e "descompressão"',
    description: 'tipo da sala inválido, tipos aceitos "reunião" e "descompressão"',
  }),
  quantidadeDePessoas: z.number({ invalid_type_error: 'quantidadeDePessoas deve ser um número' }),
  horarioInicio: z.date({
    invalid_type_error: 'horarioInicio inválido',
    required_error: 'horarioInicio é obrigatório',
  }),
  horarioFim: z.date({
    invalid_type_error: 'horarioFim inválido',
    required_error: 'horarioFim é obrigatório',
  }),
},{ required_error: 'Parametros são obrigatórios', invalid_type_error: 'Parametros são obrigatórios' })