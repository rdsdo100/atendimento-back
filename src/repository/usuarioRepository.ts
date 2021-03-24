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
         .leftJoinAndSelect('Usuarios.tipoEquipeIdFK' , 'equipeUsuarios')
         .getMany()
 
     return user
 
 
 };

const buscarUsuarioIdRepository = async (idUsuario: number) => {
   
    const usuarioRepository = getManager();
    return usuarioRepository.findOne(Usuarios, idUsuario);
};


const buscarUsuarioGrupoUsuarioId = async (idUsuario: number) =>{
    
    const  user = await createQueryBuilder('Usuarios')
    .leftJoinAndSelect('Usuarios.grupoUsuariosIdFK' , 'grupoUsuarios')
    .where('Usuarios.id = :id' , {id : idUsuario })
    .getOne()

return user
}

const listUsuarioRepository = async () => {
    const usuarioRepository = getManager();
    return usuarioRepository.find(Usuarios);
};

const updateUsuarioRepository = async (usuarios: Usuarios) => {
    const usuarioRepository = getManager();
    return await usuarioRepository.update(Usuarios ,usuarios.id , usuarios)
};

const deleteUsuarioIdRepository = async (idUsuario: number) => {
   
    const usuarioRepository = getManager();

   

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
    buscarUsuarioRepositoryAll,
    buscarUsuarioGrupoUsuarioId
};
