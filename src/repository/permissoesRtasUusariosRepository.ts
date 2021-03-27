import {createQueryBuilder} from "typeorm";

export default class PermissoesRtasUusariosRepository{

async buscarPermissoesRtasUusariosRepository (idUsuario: number) {

 let buscarPrmissoes:any

        buscarPrmissoes =  await createQueryBuilder('UsuariosRotas')
            .leftJoin('UsuariosRotas.usuariosIdFK', 'persons')
            .leftJoinAndSelect('UsuariosRotas.rotasPermissoesIdFK', 'items')
            .getMany()


    return buscarPrmissoes
};

}