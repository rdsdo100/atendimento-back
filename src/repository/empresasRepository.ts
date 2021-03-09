import {createQueryBuilder, getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';
import {Atendimentos} from "../entity/Atendimentos";
import {Empresas} from "../entity/Empresas";




const listEmpresasRepository = async (): Promise<any> => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Empresas);

};

const insertEmpresasRepository = async (empresas: Empresas)=>{

    const insertAtendimento = getManager()

    const atendimentosalvo = await insertAtendimento.save(Empresas , empresas)
    return atendimentosalvo

}
export {

listEmpresasRepository,
    insertEmpresasRepository

};
