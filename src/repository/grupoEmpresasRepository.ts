import {getManager} from 'typeorm';
import { GrupoEmpresas } from '../entity/GrupoEmpresas';






const listGruoEmpresasRepository = async (): Promise<any> => {
    const usuarioRepository = getManager();
    return await usuarioRepository.find(GrupoEmpresas);

};




export {

    listGruoEmpresasRepository,
};
