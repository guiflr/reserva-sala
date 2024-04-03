import { PrismaSalaRepositorio } from "./infra/repositorios/PrismaRepositorio"
import { ZodValidacaoSalaParametros } from "./infra/validadores/ZodValidacaoSalaParametros"
import { ListaSala } from "./main/ListaSalas"
import { SalaParametros } from "./main/types"
import { adicionaHoras } from "./util/adicionaHoras"

function buscaSalas(parametros: SalaParametros) {
    try {
        const listaSalas = new ListaSala(new PrismaSalaRepositorio(), new ZodValidacaoSalaParametros())

        const salas = listaSalas.lista(parametros)

        return console.log(JSON.stringify(salas))
    } catch (error) {
        console.log(error)

        return { status: 500, erro: 'Erro Interno' }
    }
}


// Lista valores
const parametros: SalaParametros = { tipo: 'reunião', quantidadeDePessoas: 5, horarioInicio: adicionaHoras(1), horarioFim: adicionaHoras(3) }
buscaSalas(parametros)

// Erro com parametros vazios
// const parametros: SalaParametros = null as unknown as SalaParametros
// buscaSalas(parametros)

// Erro com parametros faltantes
// const parametros: SalaParametros = { tipo: 'reunião' }  as unknown as SalaParametros
// buscaSalas(parametros)

// Lista valores [] quando não da match com salas
// const parametros: SalaParametros = { tipo: 'reunião', quantidadeDePessoas: 7, horarioInicio: adicionaHoras(1), horarioFim: adicionaHoras(3) }
// buscaSalas(parametros)