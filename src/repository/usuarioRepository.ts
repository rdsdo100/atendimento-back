import {createQueryBuilder, getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';


const buscarUsuarioRepository = async (nomeUsuario: string) => {


    const usuarioRepository = getManager();

    return usuarioRepository.findOne(Usuarios, { nomeUsuario: nomeUsuario });



   /* const  user = await createQueryBuilder('Usuarios')
        .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')

        .getOne()*/


};

const buscarUsuarioIdRepository = async (idUsuario: number) => {
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Usuarios, idUsuario);
};

const listUsuarioRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const updateUsuarioRepository = async (usuarios: Usuarios) => {
    const usuarioRepository = getManager();
};

const deleteUsuarioIdRepository = async (idUsuario: number) => {};

const buscarUsuariosRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};



export {
    buscarUsuarioRepository,
    buscarUsuarioIdRepository,
    listUsuarioRepository,
    updateUsuarioRepository,
    deleteUsuarioIdRepository,
    buscarUsuariosRepository,

};
