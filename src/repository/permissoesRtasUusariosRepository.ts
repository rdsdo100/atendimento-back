import {createQueryBuilder} from "typeorm";


const buscarPermissoesRtasUusariosRepository = async (idUsuario: number) => {

 let buscarPrmissoes:any

        buscarPrmissoes =  await createQueryBuilder('UsuariosRotas')
            .leftJoin('UsuariosRotas.usuariosIdFK', 'persons')
            .leftJoinAndSelect('UsuariosRotas.rotasPermissoesIdFK', 'items')
            .getMany()


    return buscarPrmissoes
};

export {
    buscarPermissoesRtasUusariosRepository
}
