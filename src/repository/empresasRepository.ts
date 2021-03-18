import {getManager} from 'typeorm';
import {Empresas} from "../entity/Empresas";


const updateEmpresaRpository = async (empresa : Empresas)=>{

}

const listEmpresasRepository = async (): Promise<any> => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Empresas);

};

const insertEmpresasRepository = async (empresa: Empresas)=>{
    const insertEmpresa = getManager()

    try{
    const empresaSalvo = await insertEmpresa.save(Empresas , empresa)
   return empresaSalvo
    } catch(e){
        return e
    }

}


const buscarEmpresaIdRepository = async (idEmpresa: number): Promise<any> => {
    const empresaRepository = getManager();
    return empresaRepository.findOne(Empresas , {id: idEmpresa});

};

export {

listEmpresasRepository,
updateEmpresaRpository,
    insertEmpresasRepository,
    buscarEmpresaIdRepository

};
