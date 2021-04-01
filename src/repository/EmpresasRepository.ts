import {getManager} from 'typeorm';
import { Empresas } from '../entity/Empresas';

export default class EmpresasRepository {

    async updateEmpresaRpository  (empresa : Empresas) {
    const empresaRepository = getManager();

    try{

        return await empresaRepository.update(Empresas , empresa.id , empresa);
    }catch(e){

    }
}

async deleteIdEmpresaRpository (idEmpresa : number) {

    const empresaRepository = getManager();

    try{

        return await empresaRepository.delete(Empresas , idEmpresa);
    }catch(e){

    }
}


async listEmpresasRepository (): Promise<any> {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Empresas);

};

async insertEmpresasRepository (empresa: Empresas) {
    const insertEmpresa = getManager()

    try{
    const empresaSalvo = await insertEmpresa.save(Empresas , empresa)
   return empresaSalvo
    } catch(e){
        return e
    }

}


async buscarEmpresaIdRepository  (idEmpresa: number): Promise<any>  {
    const empresaRepository = getManager();
    try{
    return empresaRepository.findOne(Empresas , {id: idEmpresa});
} catch(e){
    return e
}
};

}
