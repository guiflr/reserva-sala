export type SalaParametros = {
    tipo: 'reunião' | 'descompressão',
    quantidadeDePessoas: number;
    horarioInicio: Date;
    horarioFim: Date;
}

type Message = {
    message: string
}

export type Retorno = {
    status: number;
    data?: any;
    erro?: string | string[]
}