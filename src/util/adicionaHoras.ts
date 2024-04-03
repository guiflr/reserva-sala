export function adicionaHoras(horas: number) {
    var hoje = new Date();
    hoje.setHours(hoje.getHours() + horas);

    return hoje
}