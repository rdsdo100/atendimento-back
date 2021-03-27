import {getManager} from 'typeorm';
import { GrupoEmpresas } from '../entity/GrupoEmpresas';



export default class GrupoEmpresasRepository {



async listGruoEmpresasRepository (): Promise<any> {
    const usuarioRepository = getManager();
    return await usuarioRepository.find(GrupoEmpresas);

};

}

