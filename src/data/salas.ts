import { adicionaHoras } from "../util/adicionaHoras";

export type Sala = {
    tipo: 'reunião' | 'descompressão',
    capacidade: number;
    horarioInicioDisponivel: Date;
    horarioFimDisponivel: Date;
}

export const salas: Sala[] = [
    {
        capacidade: 10,
        tipo: 'descompressão',
        horarioInicioDisponivel: new Date(),
        horarioFimDisponivel: adicionaHoras(4),
    },
    {
        capacidade: 6,
        tipo: 'reunião',
        horarioInicioDisponivel: new Date(),
        horarioFimDisponivel: adicionaHoras(6),
    }
]