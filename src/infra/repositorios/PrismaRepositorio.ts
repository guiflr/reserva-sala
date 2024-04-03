import { Sala, salas } from "../../data/salas";
import { SalaParametros } from "../../main/types";
import { Salas } from "../../repositories/Salas";

export class PrismaSalaRepositorio implements Salas {
    listaSalasDisponiveis(parametros: SalaParametros): Sala[] {
        const listaSalaDisponiveis = salas.filter(sala => {
            return sala.tipo === parametros.tipo
        }).filter(sala => {
            return parametros.quantidadeDePessoas <= sala.capacidade
        }).filter(sala => {
            return parametros.horarioInicio.getTime() >= sala.horarioInicioDisponivel.getTime() && parametros.horarioFim.getTime() <= sala.horarioFimDisponivel.getTime()
        })


        return listaSalaDisponiveis
    }
}