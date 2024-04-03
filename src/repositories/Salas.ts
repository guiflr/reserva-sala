import { Sala } from "../data/salas";
import { SalaParametros } from "../main/types";

export interface Salas {
    listaSalasDisponiveis(parametros: SalaParametros): Sala[]
}