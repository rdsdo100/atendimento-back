import {getManager} from 'typeorm';
import {Empresas} from "../entity/Empresas";


const updateEmpresaRpository = async (empresa : Empresas)=>{

}

const deleteIdEmpresaRpository = async (idEmpresa : number)=>{

    const empresaRepository = getManager();

    try{

        return await empresaRepository.delete(Empresas , idEmpresa);
    }catch(e){

    }


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
    try{
    return empresaRepository.findOne(Empresas , {id: idEmpresa});
} catch(e){
    return e
}
};

export {

listEmpresasRepository,
updateEmpresaRpository,
    insertEmpresasRepository,
    buscarEmpresaIdRepository,
    deleteIdEmpresaRpository

};
