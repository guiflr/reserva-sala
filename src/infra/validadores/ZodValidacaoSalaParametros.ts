import { SalaParametros } from "../../main/types";
import { getZodErrors } from "../../util/trataErrosDoZod";
import { RetornoValidacao, ValidacaoSalaParametros } from "../../validators/ValidacaoSalaParametros";
import { SalaParametrosSchema } from "./schemas/ZodValidacaoSalaParametrosSchema";

export class ZodValidacaoSalaParametros implements ValidacaoSalaParametros {
    validar(parametros: SalaParametros): RetornoValidacao {
        const validation = SalaParametrosSchema.safeParse(parametros);

        if (validation.success) {
            return { erros: '', temErro: false };
        }

        const error = JSON.stringify(validation.error);

        const fieldsError = getZodErrors(error);

        return { temErro: true, erros: fieldsError };
    }
}