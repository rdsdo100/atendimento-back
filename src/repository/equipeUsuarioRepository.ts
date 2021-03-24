import { getManager } from "typeorm";
import { TipoEquipe } from "../entity/TipoEquipe";


const listEquipeUsuarioRepository = async (): Promise<any> => {
    const equipeRepository = getManager();
    return equipeRepository.find(TipoEquipe);

};

export {
    listEquipeUsuarioRepository
}