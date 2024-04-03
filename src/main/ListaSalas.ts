import { Salas } from "../repositories/Salas";
import { ValidacaoSalaParametros } from "../validators/ValidacaoSalaParametros";
import { Retorno, SalaParametros } from "./types";



export class ListaSala {
    constructor(private salaRepositorio: Salas, private validacaoSalaParametros: ValidacaoSalaParametros) { }

    lista(parametros: SalaParametros): Retorno {
        const validacao = this.validacaoSalaParametros.validar(parametros)

        if (validacao.temErro) {
            return { status: 400, erro: validacao.erros }
        }

        const salas = this.salaRepositorio.listaSalasDisponiveis(parametros)

        return { status: 200, data: { salas } }
    }
}