import { getManager } from "typeorm";
import { TipoEquipe } from "../../entity/TipoEquipe";

export default class EquipeUsuarioRepository {

    async listEquipeUsuarioRepository(): Promise<any> {
        const equipeRepository = getManager();
        return equipeRepository.find(TipoEquipe);

    };
}
