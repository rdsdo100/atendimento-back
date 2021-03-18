import {createQueryBuilder, getManager} from 'typeorm';
import { Usuarios } from '../entity/Usuarios';


const insertUsuarioRpository = async(usuario: Usuarios) => {

    const usuarioRepository = getManager();
    return usuarioRepository.save(Usuarios, usuario);

}

const buscarUsuarioRepository = async (nomeUsuario: string) => {

   const  user = await createQueryBuilder('Usuarios')
        .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
        .where('nome_usuario = :nome' , {nome : nomeUsuario})
        .getOne()

    return user


};


const buscarUsuarioRepositoryAll = async () => {

    const  user = await createQueryBuilder('Usuarios')
         .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'usuarios')
         .getMany()
 
     return user
 
 
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

const deleteUsuarioIdRepository = async (idUsuario: number) => {
   
    const usuarioRepository = getManager();

    try{

        return usuarioRepository.delete(Usuarios , idUsuario);
    }catch(e){

    }


};

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
    insertUsuarioRpository,
    buscarUsuarioRepositoryAll
};
