import { SalaParametros } from "../main/types";

export type RetornoValidacao = {
    erros: string[] | string;
    temErro: boolean;
}

export interface ValidacaoSalaParametros {
    validar(parametros: SalaParametros): RetornoValidacao
}